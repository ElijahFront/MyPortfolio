
  var change = function (disp, disp2,cl) {
  $('.block').css('display', disp);
  $('.block-login').css('display', disp2);
  $('#log').addClass(cl);
};
  
  $("#log").on("click", function(e) {
    $("#bl").addClass("flipped");
    $("#log").css('display', 'none');
    setTimeout(function(){
      change('none','flex','tapped')}, 600);
    e.stopPropagation()
    });





if ($('#log').hasClass('tapped')) {

  $(document).on('click', function () {
    $('#bl').removeClass('flipped');
    $('#log').removeClass('tapped');
    setTimeout(change('flex', 'none'), 1000)
  });
}

