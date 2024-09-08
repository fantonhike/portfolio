$(document).ready(function () {
    var divs = $('.container');
    var dir = 'up'; // wheel scroll direction
    var div = 0; // current div
	function scrollfunc() {
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
            if (value > 21) // this number needs to be equal to the number of pages!!!
              value = 21; // same as above!!!
            document.getElementById('number').value = value;
        }
        //console.log(div, dir, divs.length);
        $('html,body').stop().animate({
            scrollTop: divs.eq(div).offset().top
        }, 0);
  if (value <= 0) { // this number needs to be equal to the number of images in the first project!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: white');
          document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
          document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
        }
        if (value > 0 && value < 7) { // this number needs to be equal to the number of images in the first project!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
          document.getElementById('gravitybutton').setAttribute('style', 'color: white');
          document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
        }
        if (value > 6 && value < 9) { // between number of images in first project and number of images in first 2 projects + 1!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
	  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
          document.getElementById('crescentbutton').setAttribute('style', 'color: white');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
        }
        if (value > 8 && value < 12) { // between numebr of images in first 2 projects and number of images in first 3 projects + 1!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
	  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
          document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: white');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
        }
        if (value > 11 && value < 21) { // this number needs to be equal to the number of pages!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
	  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
          document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: white');
        }
        if (value > 20) { // this number needs to be equal to the number of pages - 1!!!
          document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
	  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
          document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
          document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
          document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
        }
        return false;
	}
    $(document.body).on('DOMMouseScroll mousewheel', function(e) {
        if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
            dir = 'down';
        } else {
            dir = 'up';
        }
        scrollfunc();
    });

	window.addEventListener("keydown", function (event) {
		
		switch (event.key) {
			case "Up": // IE/Edge specific value
			case "ArrowUp":
			dir = 'up';
			scrollfunc();
			break;
			
			case "Down": // IE/Edge specific value
			case "ArrowDown":
			dir = 'down';
			scrollfunc();
			break;

			case "Left": // IE/Edge specific
			case "ArrowLeft":
			dir = 'up';
			scrollfunc();
			break;

			case "Right": // IE/Edge specific
			case "ArrowRight":
			dir = 'down';
			scrollfunc();
			break;
   
			default:
			return; // No key event
		}

		event.preventDefault(); // Avoid key handling twice
		}, true);

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

function title(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 1;
  document.getElementById('number').value = value;
  document.getElementById('titlebutton').setAttribute('style', 'color: white');
  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
  document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
}
function gravity(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 1;
  document.getElementById('number').value = value;
  document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
  document.getElementById('gravitybutton').setAttribute('style', 'color: white');
  document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
}
function crescent(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 7; // this number needs to be equal to the number of pages in the first project + 1!!!
  document.getElementById('number').value = value;
  document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
  document.getElementById('crescentbutton').setAttribute('style', 'color: white');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
}
function alchemist(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 9; // this number needs to be equal to the number of pages in the first 2 projects + 1!!!
  document.getElementById('number').value = value;
  document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
  document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: white');
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: #707070');
}
function pictishcase(){
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value = 12; // this number needs to be equal to the number of pages in the first 3 projects + 1!!!
  document.getElementById('number').value = value;
  document.getElementById('titlebutton').setAttribute('style', 'color: #707070');
  document.getElementById('gravitybutton').setAttribute('style', 'color: #707070');
  document.getElementById('crescentbutton').setAttribute('style', 'color: #707070');
  document.getElementById('alchemistbutton').setAttribute('style', 'color: #707070');
  document.getElementById('pictishcasebutton').setAttribute('style', 'color: white');
}
