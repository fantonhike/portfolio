$(document).ready(function () {
    var divs = $('.container');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
    $(document.body).on('DOMMouseScroll mousewheel', function (e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        // find currently visible div :
        div = -1;
        divs.each(function(i){
            if (div<0 && ($(this).offset().top >= $(window).scrollTop())) {
                div = i;
            }
        });
        if (dir == 'up' && div > 0) {
            div--;
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value--;
            document.getElementById('number').value = value;
        }
        if (dir == 'down' && div < divs.length) {
            div++;
            var value = parseInt(document.getElementById('number').value, 10);
            value = isNaN(value) ? 0 : value;
            value++;
            if (value > 9) // this number needs to be equal to the number of pages!!!
              value = 9;
            document.getElementById('number').value = value;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 0);
        if (value <= 5) {
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: white');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('atchoumbutton').setAttribute('style', 'color: #707070');
        }
        if (value > 5 && value < 9) {
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: white');
          document.getElementById('atchoumbutton').setAttribute('style', 'color: #707070');
        }
        if (value == 9) {
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('atchoumbutton').setAttribute('style', 'color: white');
        }
        return false;
    });
    $(window).resize(function () {
        $('html,body').scrollTop(divs.eq(div).offset().top);
    });
});

document.addEventListener('pointerdown', (event) => {
  if (event.pointerType === "touch") {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
  if (event.pointerType === "pen") {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }
}, { once: true });

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
