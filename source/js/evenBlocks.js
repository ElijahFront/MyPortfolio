(function () {
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

})();