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
    $('#preloader').css('display', 'none')
  }, 1000)
});



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





if ($('#log').hasClass('tapped')) {

  $(document).on('click', function (e) {
    $('#bl').removeClass('flipped');
    $('#log').removeClass('tapped');
    setTimeout(change('flex', 'none', ''), 1000)
  });
}
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

  var d1 = $.Deferred();
  var d2 = $.Deferred();

  e.preventDefault();

  var menuL = $('.menu__left'),
      menuR = $('.menu__right'),
      menu = $('.menu'),
      content = $('.menu__content');
  
  menu.show();
  // menuL.css('width', '50%');
  // menuR.css('width', '50%');
  menuL.addClass('menu__left_turn');
  menuR.addClass('menu__right_turn');

  // d1.done(function () {
  //   console.log('d1 is done')
  // });
  // d2.done(function () {
  //   console.log('d2 is done')
  // });

 setTimeout(function () {
    content.show();
    $('#menu__close').css('display', 'block');
    $('#menu__open').css('display','none');
  }, 400);

});
///Closing the menu

$('#menu__close').on('click', function (e) {
  e.preventDefault();

  var d11 = $.Deferred();
  var d12 = $.Deferred();

  var menuL = $('.menu__left'),
      menuR = $('.menu__right'),
      menu = $('.menu'),
      content = $('.menu__content');

  content.hide();

  menuL.removeClass('menu__left_turn');
  menuR.removeClass('menu__right_turn');
  // d11.done(function () {
  //   console.log('d11 is done')
  // });
  // d12.done(function () {
  //   console.log('d12 is done')
  // });
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
