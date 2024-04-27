let total = 0;
const elTotal = document.querySelector('#total')
document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  }, {passive:false}); 
  document.querySelector('#box').addEventListener('touchstart', function(event) {
      if(event.touches.length>3){
return
      }
   total+=1


   elTotal.textContent = total
  }, false);
