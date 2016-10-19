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