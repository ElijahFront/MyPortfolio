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
  
  menu.css('display', 'flex');
  menuL.animate({
    'width' : '50%'
  }, 400, function () {
    d1.resolve();
    d1.done(function () {
      console.log('d1 is done')
    });

  });
  menuR.animate({
    'width' : '50%'
  }, 400, function () {
    d2.resolve();
    d2.done(function () {
      console.log('d2 is done')
    });

  });
  // d1.done(function () {
  //   console.log('d1 is done')
  // });
  // d2.done(function () {
  //   console.log('d2 is done')
  // });

  $.when(d1, d2).done(function () {
    content.show();
    $('#menu__close').css('display', 'block');
    $('#menu__open').css('display','none');
  });

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

  menuL.animate({
    'width' : '0'
  }, 400, function () {
    d11.resolve();
    d11.done(function () {
      console.log('d11 is done')
    });
  });
  menuR.animate({
    'width' : '0'
  }, 400, function () {
    d12.resolve();
    d12.done(function () {
      console.log('d12 is done')
    });
  });
  // d11.done(function () {
  //   console.log('d11 is done')
  // });
  // d12.done(function () {
  //   console.log('d12 is done')
  // });
  $.when(d11, d12).done(function () {
    $('#menu__close').css('display', 'none');
    $('#menu__open').css('display', 'block');
    menu.css('display', 'none');

  });

});

//SLIDER

(function slider() {
  var counter = 1;
  $('#sliderUp').on('click', function (e) {
    e.preventDefault();
    var items = $('.btn-up .slider__pict'),
        ActItem = $('.btn-up .slider__pict.active'),
        anotherItems = $('.btn-down .slider__pict'),
        anotherActItem = $('.btn-down .slider__pict.active'),
        descrItems = $('.slider__description_item'),
        descrActItem = $('.slider__description_item.active');


    if (counter >= items.length){
      counter = 0;
    }
    var nextItem = items.eq(counter),
        anotherNextItem = anotherItems.eq(-counter + 1),
        nextDescrItem = descrItems.eq(counter - 1);

    ActItem.animate({
      'top' : '-55%'
    }, 300);
    anotherActItem.animate({
      'top': '155%'
    }, 300);

    descrActItem.animate({
      'display' : 'none'
    }, 150);

    nextDescrItem.animate({
      'display': 'block'
    }, 150, function () {
      descrActItem.removeClass('active');
      nextDescrItem.addClass('active');
    });


    function changeSlide(src){
      $('.slider__main-picture').attr('src', src);
    }

    nextItem.animate({
      'top' : '50%'
    }, 300, function () {
      var src = ActItem.find('img').attr('src');
      changeSlide(src);
      ActItem.removeClass('active').css('top', '155%');
      nextItem.addClass('active');

    });
    anotherNextItem.animate({
      'top': '50%'
    }, 300, function () {
      anotherActItem.removeClass('active').css('top', '-55%');
      anotherNextItem.addClass('active');
    });

    counter++;

  });
  
  
}());
