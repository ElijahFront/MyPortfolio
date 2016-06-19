
  var change = function (disp, disp2,cl) {
  $('.block').css('display', disp);
  $('.block-login').css('display', disp2);
  $('#log').addClass(cl);
};
  
  $("#log").on("click", function(e) {
    $("#bl").addClass("flipped");
    setTimeout(function(){
      change('none','flex','tapped')}, 600);
    
    });





if ($('#log').hasClass('tapped')) {

  $(document).on('click', function (e) {
    $('#bl').removeClass('flipped');
    $('#log').removeClass('tapped');
    setTimeout(change('flex', 'none', ''), 1000)
  });
}
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
