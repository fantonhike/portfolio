$(document).ready(function () {
    var divs = $('.container');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
});
    $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
});

document.addEventListener('pointerdown', (event) => {
  if (event.pointerType === "mouse") {document.getElementById('atchoumbutton').setAttribute('style', 'color: green');}
  if (event.pointerType === "touch") {document.getElementById('atchoumbutton').setAttribute('style', 'color: red');}
  if (event.pointerType === "pen") {document.getElementById('atchoumbutton').setAttribute('style', 'color: blue');}
});

function pictishcase(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 1;
  document.getElementById('number').value = value;
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: white');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('atchoumbutton').setAttribute('style', 'color: #707070');
}
function alchemist(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 6;
  document.getElementById('number').value = value;
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: white');
  document.getElementById('atchoumbutton').setAttribute('style', 'color: #707070');
}
function atchoum(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 9;
  document.getElementById('number').value = value;
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('atchoumbutton').setAttribute('style', 'color: white');
}
