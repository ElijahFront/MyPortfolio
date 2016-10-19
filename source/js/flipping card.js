(function () {
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

})();