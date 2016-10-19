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