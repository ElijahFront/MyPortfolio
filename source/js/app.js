//PRELOADER

$(document).ready(function () {
  var inText = $('#prelText'),
      counter = 0;
  setInterval(function () {
    inText.text(counter + '%');
    counter++;
    if (counter >= 100){
      counter = 100;
    }
  }, 47)
});

$(window).load(function () {

  setTimeout(function () {
    $('#prelText').text('100%');
    $('#preloader').hide();
    // $('#preloader').css('display', 'none')
  }, 1000)
});


//FLIPPING CARD
  var change = function (disp, disp2,cl) {
  $('.block').css('display', disp);
  $('.block-login').css('display', disp2);
  $('#log').addClass(cl);
};
  
  $("#log").on("click", function(e) {
    $("#bl").addClass("flipped");
    setTimeout(function(){
      change('none','flex','tapped')}, 600);
    });



  $(document).on('click', function (e) {
    if ($('#log').hasClass('tapped')) {
      $('#bl').removeClass('flipped');
      $('#log').removeClass('tapped');
      setTimeout(change('flex', 'none', ''), 1000)
    }
  });



  /* Заполнение шкалы скилов
 var circle = document.getElementById('circle'),
     btn = document.getElementById('start');
  btn.onclick = function () {
    var input = document.getElementById("text").value;
    var innerInp = (input*314)/100;
    var strInner = innerInp.toString();
    console.log(strInner);
    circle.style.strokeDasharray = strInner + "px 314px";
  };
  */

  //высота блоков на странице About

  function evenBlocks() {
    var left = $('.info-about-me'),
        right = $('.advantages');
    // console.log('Высота левого: ' + left.height());
    // console.log('Высота правого: ' + right.height());
    if(left.height() >= right.height()){
      right.height(left.height());
    } else {
      left.height(right.height());
    }
  }

    if ($(window).width() > 760){
      evenBlocks();
    } else {
      $('.info-about-me').css('height', 'auto');
      $('.advantages').css('height', 'auto');
    }


//MENU

$('#menu__open').on('click', function (e) {


  e.preventDefault();

  var menuL = $('.menu__left'),
      menuR = $('.menu__right'),
      menu = $('.menu'),
      content = $('.menu__content');

  menu.show();
  menu.addClass('active');
  // menuL.addClass('menu__left_turn');
  // menuR.addClass('menu__right_turn');

  menu.css('display', 'flex');

  setTimeout(function () {
    content.show();
    $('#menu__close').css('display', 'block');
    $('#menu__open').css('display','none');
  }, 400);

});

///Closing the menu

$('#menu__close').on('click', function (e) {
  e.preventDefault();
  var menuL = $('.menu__left'),
      menuR = $('.menu__right'),
      menu = $('.menu'),
      content = $('.menu__content');

  content.hide();


  // menuL.removeClass('menu__left_turn');
  // menuR.removeClass('menu__right_turn');
menu.removeClass('active');

  setTimeout(function () {
    $('#menu__close').css('display', 'none');
    $('#menu__open').css('display', 'block');
    menu.css('display', 'none');

  }, 400);

});


// MOUSE PARALLAX

$(window).on('mousemove', function(e){
  var mouseX = e.pageX,
      mouseY = e.pageY,
      w = (window.innerWidth/2),  // для изменения начальной точки центра на середину окна
      h = (window.innerHeight/2),
      MoveX = ((w*0.01) - mouseX)*0.05,
      MoveY = ((h*0.01) - mouseY)*0.05;

      //console.log(mouseX, mouseY + ';;;' + MoveX, MoveY);

  $('.mountains').css({
  'transform' : 'translate3d(' + MoveX + 'px, ' + MoveY + 'px, 0)'});  // the main idea is here. it would also be conscious to set varieties out of the 'transform3d' property

  });



//SLIDER

(function slider() {
  $('.move__control').on('click', function (e) {
    e.preventDefault();
    var descrItems = $('.slider__description_item'),
        descrActItem = $('.slider__description_item.active');

    function changeSlide(src) {
      $('.slider__main-picture').attr('src', src);
    }

    //console.log(items.length);

    if($(this).hasClass('move__control-up')){
      var items = $('.btn-up .slider__pict');
      console.log(items);
      var counter = ($('.btn-up .slider__pictures_list .slider__pict').index($('.slider__pict.active'))) + 1;

      if (counter >= ((items.length))){
        counter = 0;
      }
      console.log('btn-up');
      var nextItem = items.eq(counter + 1);
      var anotherItems = $('.btn-down .slider__pict');
      var anotherNextItem = anotherItems.eq(counter - 2);
      var anotherActItem = $('.btn-down .slider__pict.active');
      var ActItem = $('.btn-up .slider__pict.active');
      var nextDescrItem = descrItems.eq(counter - 1);
      //nextItem.css('top', '155%');

      ActItem.animate({
        'top':'-55%'
      }, 300);

      // anotherItems.css('top', '-55%');
      anotherActItem.animate({
        'top':'155%'
      }, 300);

      descrActItem.animate({
        'display': 'none'
      }, 300);

      nextDescrItem.animate({
        'display': 'block'
      }, 300, function () {
        descrActItem.removeClass('active');
        nextDescrItem.addClass('active');
      });

      nextItem.animate({
        'top':'55%'
      }, 300, function () {
        var src = ActItem.find('img').attr('src');
        changeSlide(src);
        ActItem.css('top', '155%').removeClass('active');
        nextItem.addClass('active');
      });
      anotherNextItem.animate({
        'top': '55%'
      }, 300, function () {
        anotherActItem.removeClass('active').css('top', '-55%');
        anotherNextItem.addClass('active');
      });
      console.log(counter);
    }

     else if ($(this).hasClass('move__control-down')){
      var items = $('.btn-down .slider__pictures_list .slider__pict');
      console.log(items.length);

      if (counter >= ((items.length))){
        counter = 0;
      }

      var counter = ($('.btn-down .slider__pict').index($('.slider__pict.active'))) + 1;
      console.log('btn-down');
      var nextItem = items.eq(counter);
      var anotherItems = $('.btn-up .slider__pict');
      var anotherNextItem = anotherItems.eq(counter - 2);
      var anotherActItem = $('.btn-up .slider__pict.active');
      var ActItem = $('.btn-down .slider__pict.active');
      var nextDescrItem = descrItems.eq(counter - 1);
      //nextItem.css('top', '155%');

      ActItem.animate({
        'top':'-55%'
      }, 300);

      // anotherItems.css('top', '-55%');
      anotherActItem.animate({
        'top':'155%'
      }, 300);

      descrActItem.animate({
        'display': 'none'
      }, 300);

      nextDescrItem.animate({
        'display': 'block'
      }, 300, function () {
        descrActItem.removeClass('active');
        nextDescrItem.addClass('active');
      });

      nextItem.animate({
        'top':'55%'
      }, 300, function () {
        var src = ActItem.find('img').attr('src');
        changeSlide(src);
        ActItem.css('top', '155%').removeClass('active');
        nextItem.addClass('active');
      });
      anotherNextItem.animate({
        'top': '55%'
      }, 300, function () {
        anotherActItem.removeClass('active').css('top', '-55%');
        anotherNextItem.addClass('active');
      });
    }

  });
}());