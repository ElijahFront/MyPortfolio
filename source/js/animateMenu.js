(function () {
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
})();
