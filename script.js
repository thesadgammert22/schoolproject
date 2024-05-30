var elem1 = document.getElementById("income");
elem1.onclick = function(e) {
openFullscreen1()
}
       
function openFullscreen1() {

  if (elem1.requestFullscreen) {
    elem1.requestFullscreen();
  } else if (elem1.webkitRequestFullscreen) { /* Safari */
    elem1.webkitRequestFullscreen();
  } else if (elem1.msRequestFullscreen) { /* IE11 */
    elem1.msRequestFullscreen();
  }
}


var elem2 = document.getElementById("budget");
elem2.onclick = function(e) {
openFullscreen2()
}
       
/* Get the element you want displayed in fullscreen */ 

/* Function to open fullscreen mode */
function openFullscreen2() {

  if (elem2.requestFullscreen) {
    elem2.requestFullscreen();
  } else if (elem2.webkitRequestFullscreen) { /* Safari */
    elem2.webkitRequestFullscreen();
  } else if (elem2.msRequestFullscreen) { /* IE11 */
    elem2.msRequestFullscreen();
  }
}

var elem3 = document.getElementById("summary");
elem3.onclick = function(e) {
openFullscreen3()
}
       
/* Get the element you want displayed in fullscreen */ 

/* Function to open fullscreen mode */
function openFullscreen3() {

  if (elem3.requestFullscreen) {
    elem3.requestFullscreen();
  } else if (elem3.webkitRequestFullscreen) { /* Safari */
    elem3.webkitRequestFullscreen();
  } else if (elem3.msRequestFullscreen) { /* IE11 */
    elem3.msRequestFullscreen();
  }
}


