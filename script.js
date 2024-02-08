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
