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