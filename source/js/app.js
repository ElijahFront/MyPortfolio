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
      e.preventDefault();
    $("#bl").addClass("flipped");
    setTimeout(function(){
      change('none','flex','tapped')}, 600);
    });



  $('.overlay').on('click', function () {
      if ($(this) != $('.block-login')) {
          if ($('#log').hasClass('tapped')) {
              $('#bl').removeClass('flipped');
              $('#log').removeClass('tapped');
              setTimeout(change('flex', 'none', ''), 600)
          }
      }
  });

    $('.btn-main').on('click', function (e) {
        e.preventDefault();
        if ($('#log').hasClass('tapped')) {
            $('#bl').removeClass('flipped');
            $('#log').removeClass('tapped');
            setTimeout(change('flex', 'none', ''), 600)
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
    $('#menu__close').css('display', 'block').addClass('menu__close-btn_crossed');
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
    $('#menu__close').css('display', 'none').removeClass('menu__close-btn_crossed');
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


  $('.mountains').css({
  'transform' : 'translate3d(' + MoveX + 'px, ' + MoveY + 'px, 0)'});  // the main idea is here. it would also be conscious to set varieties out of the 'transform3d' property

  });



//SLIDER


(function () {
    var nextBtn = $('#sliderUp'),
        prevBtn = $('#sliderDown'),
        sliderItemsRight = $('.slider__pictures_list-right .slider__pict'),
        sliderItemsLeft = $('.slider__pictures_list-left .slider__pict'),
        mainPic = $('.slider__main-picture'),
        currentSlideIndex = 2,
        animationDuration = 300,
        descrList = $('.slider__description_list .slider__description_item');

    $(document).ready(function () {
        nextBtn.on('click', changeSlide);
        prevBtn.on('click', changeSlide);
    });

    function changeSlide(e) {
        e.preventDefault();
        
        var $this = $(this);
        
        if ($this.hasClass('move__control-down')){
            if (currentSlideIndex - 1 < 0){
                currentSlideIndex = sliderItemsRight.length - 1;
            } else {
                currentSlideIndex--;
            }
        } else {
            if (currentSlideIndex + 1 > sliderItemsRight.length - 1){
                currentSlideIndex = 0;
            } else {
                currentSlideIndex++;
            }
        }


        changeMainPic(sliderItemsRight);
        slideLeftPreview(sliderItemsLeft);
        slideRightPreview(sliderItemsRight);
        changeDescription();

        setTimeout(function () {
            nextBtn.attr('disabled', 'false');
            prevBtn.attr('disabled', 'false');
        }, animationDuration);

    }

    function changeDescription() {
        descrList.removeClass('active');
        descrList.eq(currentSlideIndex).addClass('active');

    }
    
    function changeMainPic(slideItems) {
        var nextIndexSrc = slideItems.eq(currentSlideIndex).find('img').attr('src');
        mainPic.fadeOut(function () {
            mainPic.attr('src', nextIndexSrc);
            $(this).fadeIn();
        });

    }

    function slideLeftPreview(slideItems) {
        var nextImgIndex;

        if (currentSlideIndex + 1 >= slideItems.length){
            nextImgIndex = 0;
        } else {
            nextImgIndex = currentSlideIndex + 1;
        }

        nextBtn.attr('disabled', 'true');
        prevBtn.attr('disabled', 'true');

        slideItems.filter('.active').addClass('slider__pict_to-up').removeClass('active');
        
        slideItems.eq(nextImgIndex).addClass('active');



        setTimeout(function () {
            slideItems.removeClass('slider__pict_to-up')
        }, animationDuration);
    }

    function slideRightPreview(slideItems) {
        var nextImgIndex;
        if (currentSlideIndex == 0){
            nextImgIndex = slideItems.length - 1;
        } else {
            nextImgIndex = currentSlideIndex - 1;
        }

        nextBtn.attr('disabled', 'true');
        prevBtn.attr('disabled', 'true');

        slideItems.filter('.active').addClass('slider__pict_to-up').removeClass('active');
        slideItems.eq(nextImgIndex).addClass('active');

        setTimeout(function () {
            slideItems.removeClass('slider__pict_to-up')
        }, animationDuration);

    }



})();


//STICKY BLOG MENU

(function sticky() {
    var menu = $('.blog__list'),
        articles = $('.content__article');
    
    if (articles.length != 0) {
        $(window).scroll(function () {
            var wScroll = $(window).scrollTop(),
                start = $('.blog__content').offset().top;

            if ($('.blog__themes').hasClass('blog__themes_tapped')) {

            } else {
                if (wScroll >= start) {
                    menu.addClass('blog__list_sticky');
                } else {
                    menu.removeClass('blog__list_sticky');
                }

                changeActive();
            }
        })
    }

    function changeActive() {
        Array.from(articles).forEach(function (item, i) {

            if ($(window).scrollTop() - $(item).offset().top > 8 && $(window).scrollTop() - $(item).offset().top < 200) {

                $(item).addClass('active-art');
                var index = $('.active-art').index();
                menu.find('.blog__list_item-link').removeClass('blog__list_item-link-active');
                menu.find('.blog__list_item-link').eq(index).addClass('blog__list_item-link-active');

            } else {
                $(item).removeClass('active-art');

            }
        })
    }
        



  
            
    

})();


/*
* Blog menu on tablet/phone
* 
 */

(function TabletMenu() {
    $('.blog__themes').on('click', function (e) {
        e.preventDefault();


        if ($('.blog__themes').hasClass('blog__themes_tapped')){
            $(this).removeClass('blog__themes_tapped')
        } else {
            $('.blog__themes').addClass('blog__themes_tapped');
        }
    })

}());

/*
* move sideMenu
 */

// (function(){
//
//     $(window).scroll(function () {
//
//         if ($(window).width() <= 768){
//             var wScroll = $(window).scrollTop() - 200;
//             $('.blog__themes').css('top', wScroll +'px');
//         }
//
//     })
//
// }());

//($(window).scrollTop+($(window).innerHeight()/2)) + 'px'


/*
* Send Authorization data
 */

(function Login() {

    function sendLoginXHR(data, url){
        $.ajax({
            type: 'POST',
            data:data,
            url:url,
            statusCode: {
                200: function () {
                    window.location.href = '/admin'
                },
                403: function () {
                    alert('Access not permitted')
                }
            }
        })
    }

    $('.btn-enter').on('click', function (e) {
        e.preventDefault();
        
        var login = $('.input-log').val(),
            pass = $('.input-password').val(),
            check = $('#human').prop('checked'),
            radio = $('#y-rob').prop('checked');
        
        var data = {
            login: login,
            password: pass
        };
        if (!check || !radio){
            alert('Роботам тут не место!')
        } else if (login == '' || pass == ''){
            $('.alert').show();
        } else {
            sendLoginXHR(data, '/login');
            console.log(data)
        }
    })

}());

/*
* Admin tabs behaviour
 */

(function adminTabs() {

    var windows = $('.admin__main'),
        tabs = $('.tabs__item_link');

    tabs.on('click', function (e) {
        e.preventDefault();

        var liAct = $(this).parent();


        if (!liAct.hasClass('active')){
            $('.tabs__item').removeClass('active');
            liAct.addClass('active');

        }
        var indexOfActLi = $('.tabs__item.active').index();
        windows.hide();
        windows.eq(indexOfActLi).show();
    })

}());

/*
* Admin functionality
 */

(function AdminUpdate() {

    function sendXHR(url, data){

        $.ajax({
            type: 'POST',
            url: url,
            data: data
        })
    }

    $('#admin__save_skills').on('click', function (e) {
        e.preventDefault();

        

        var html = $('#admin__html').val(),
            css = $('#admin__css').val(),
            js = $('#admin__js').val(),
            php = $('#admin__php').val(),
            node = $('#admin__node').val(),
            mongo = $('#admin__mongo').val(),
            git = $('#admin__git').val(),
            gulp = $('#admin__gulp').val(),
            bower = $('#admin__bower').val();
        if (html == ''||css == ''||php == ''||node == ''||mongo == ''||git == ''||gulp == ''||gulp == ''||bower == ''){
            alert('Пожалуйста, не оставляйте пустые поля')
        } else {

            var SkillsData = {
                html: html,
                css: css,
                js: js,
                php: php,
                node: node,
                mongo: mongo,
                git: git,
                gulp: gulp,
                bower: bower
            };


            //sendXHR('/skillsPost', SkillsData);
            $.ajax({
                type: 'POST',
                url: '/skillsPost',
                data: SkillsData,
                statusCode:{
                    200 : function () {
                        alert('Скилы сохранены!');
                        $('#admin__html').val('');
                        $('#admin__css').val('');
                        $('#admin__js').val('');
                        $('#admin__php').val('');
                        $('#admin__node').val('');
                        $('#admin__mongo').val('');
                        $('#admin__git').val('');
                        $('#admin__gulp').val('');
                        $('#admin__bower').val('');
                    }
                }
            })
        }

    });
    
    $('#admin__save_blog').on('click', function (e) {
        
        e.preventDefault();
        
        var title = $('.admin__blog_form-title').val(),
            date = $('.admin__blog_form-date').val(),
            text = $('.admin__blog_form-text').val();
        
        var blogData = {
            title: title,
            date: date,
            text: text
        };
        
        //sendXHR('/saveBlogArticles', blogData)
        $.ajax({
            type: 'POST',
            url: '/saveBlogArticles',
            data: blogData,
            statusCode:{
                200 : function () {
                    alert('Статья сохранена!');
                    $('.admin__blog_form-title').val('');
                    $('.admin__blog_form-date').val('');
                    $('.admin__blog_form-text').val('');
                }
            }
        })
        
    });

    $('#save_work').on('click', function (e) {

        e.preventDefault();

        alert('Извините, данный функционал пока в разработке. Попробуйте написать статью в блог')
    })

}());

/*
* logout
 */

(function () {
    
    $('#logout').on('click', function (e) {
        
        e.preventDefault();
        
        $.ajax({
            url:'/logout',
            type:'POST',
            statusCode:{
                200:function () {
                    window.location.href = '/'
                }
            }
        })
    })
    
}());

/*
 * Works saving
 */

(function () {
  
    $('#save_work').on('click', function (e) {
        
        e.preventDefault();
        
        var worksData = new FormData($('#works_form')[0]);

        $.ajax({
            type: 'POST',
            url: '/saveWorks',
            data: worksData,
            processData: false,
            contentType: false
        })
    })
    
}());

/*
 / Smooth scroll
 */

(function () {

    var works = [$('.arrow a'), $('.arrow-up a'), $('a[href="#info_about_me"]')];

    function scroll(obj) {
        
        obj.on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body, html').animate({scrollTop:top}, 700)

        });
    }
    $.each(works, function (i, v) {
        scroll(v)
        
    });
    //scroll(works)
})();

/*
 / Animate skills
 */

(function () {

    var objects = [$('.front'), $('.back'), $('.workflow')];

    $.each(objects, function (i, val) {
        val.find('.skills-circle').css('stroke-dasharray', '0px 314px');
    });

    function beginAnimation(obj) {
        var top = obj.offset().top,
            scroll = $(window).scrollTop();

        if (scroll > top - 300){
            animate(obj.find('.skills-circle'))
        }
    }
    function animate(obj) {

        var stroke = obj.attr('stroke-dasharray');
        
        obj.css('stroke-dasharray', stroke);

    }
    
    $(window).scroll(function () {
        $.each(objects, function (i, v) {
            beginAnimation(v)

        })
    })
    

})();