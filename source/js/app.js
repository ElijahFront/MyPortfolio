var block = document.getElementById('bl'),
    btn = document.getElementById('log');

btn.onclick = function () {
  block.style.display = 'none';
  document.getElementsByClassName('block-login')[0].style.display = 'flex';
  btn.style.display = 'none';
};

if (btn.style.display == 'none'){

  document.onclick = function () {
    block.style.display = 'flex';
    document.getElementsByClassName('block-login')[0].style.display = 'none';
    btn.display = 'block';
  }
}