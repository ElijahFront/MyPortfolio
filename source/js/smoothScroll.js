(function () {

    var works = [$('.arrow a'), $('.arrow-up a'), $('a[href="#info_about_me"]')];

    function scroll(obj) {

        obj.on('click', function (e) {
            e.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;

            $('body').addClass('preventScroll');

            $('body').on('mousewheel', function (el) {

                if ($(this).hasClass('preventScroll')){
                    console.log('prevented');
                    el.preventDefault();
                    el.stopPropagation();
                }



            });

            $('body, html').animate({scrollTop:top}, {duration:600, complete:function () {

                $('body').removeClass('preventScroll')

            }}  )

        });
    }
    $.each(works, function (i, v) {
        scroll(v)

    });

})();