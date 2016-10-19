(function () {
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
})();