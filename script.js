let total = 0;
const elTotal = document.querySelector('#total')
document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, {passive:false}); 
  document.querySelector('#box').addEventListener('touchstart', function(event) {
   total+=1
   elTotal.textContent =total
  }, false);
