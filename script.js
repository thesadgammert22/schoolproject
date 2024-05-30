document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "1") {
        openFullscreen1();
	}});

var elem1 = document.getElementById("income");

function openFullscreen1() {

  if (elem1.requestFullscreen) {
    elem1.requestFullscreen();
  } else if (elem1.webkitRequestFullscreen) { /* Safari */
    elem1.webkitRequestFullscreen();
  } else if (elem1.msRequestFullscreen) { /* IE11 */
    elem1.msRequestFullscreen();
  }
}


document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "2") {
        openFullscreen2();
	}});

var elem2 = document.getElementById("budget");
       

function openFullscreen2() {

  if (elem2.requestFullscreen) {
    elem2.requestFullscreen();
  } else if (elem2.webkitRequestFullscreen) { /* Safari */
    elem2.webkitRequestFullscreen();
  } else if (elem2.msRequestFullscreen) { /* IE11 */
    elem2.msRequestFullscreen();
  }
}

document.addEventListener("keypress", function onEvent(event) {
    if (event.key === "3") {
        openFullscreen3();
	}});

var elem3 = document.getElementById("summary");
       

function openFullscreen3() {

  if (elem3.requestFullscreen) {
    elem3.requestFullscreen();
  } else if (elem3.webkitRequestFullscreen) { /* Safari */
    elem3.webkitRequestFullscreen();
  } else if (elem3.msRequestFullscreen) { /* IE11 */
    elem3.msRequestFullscreen();
  }
}


