 
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
  blur.style.display = "inline-block";
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
 
