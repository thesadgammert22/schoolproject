 
let counter = 0;
 
const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('pluscounter');
const decrementBtn = document.getElementById('minuscounter');
var poduct1 = document.getElementById("product1");
var ximg = document.getElementById("productpanx");
var panel = document.getElementById("productpan");
var blur = document.getElementById("blur");

product1.addEventListener("click", function() {
  panel.style.display = "inline-block";
  productpanimg.src = "https://i.ibb.co/J7xmgzB/Screenshot-2024-01-24-9-16-01-AM.png";
  blur.style.display = "inline-block";
  counter = 1;
});

product2.addEventListener("click", function() {
  panel.style.display = "inline-block";
  productpanimg.src = "https://i.ibb.co/7pbVttN/ezgif-7-07fce48017.gif";
  blur.style.display = "inline-block";
  counter = 2;
});



ximg.addEventListener("click", function() {

  panel.style.display = "none";
  blur.style.display = "none";

});

 
// To increment the value of counter
incrementBtn.addEventListener('click', () => {
    counter++;
    counterValue.innerHTML = counter;
});
 
// To decrement the value of counter
decrementBtn.addEventListener('click', () => {
    counter--;
    counterValue.innerHTML = counter;
});

document.addEventListener ("keydown", function (zEvent) {
    if (zEvent.ctrlKey  &&  zEvent.altKey  &&  zEvent.key === "e") {  // case sensitive
      alert(funny)
      Location.replace("fnfpage.hml"); 
    }
} );
 
