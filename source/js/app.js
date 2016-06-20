
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

  //высота блоков на странице About

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
  $(window).resize(function () {
    if ($(window).width() > 760){
      evenBlocks();
    } else {
      $('.info-about-me').css('height', 'auto');
      $('.advantages').css('height', 'auto');
    }
  });

