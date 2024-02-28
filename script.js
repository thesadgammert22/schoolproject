 
let counter = 0;
 
const counterValue = document.getElementById('counter');
const incrementBtn = document.getElementById('pluscounter');
const decrementBtn = document.getElementById('minuscounter');

 
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
 
