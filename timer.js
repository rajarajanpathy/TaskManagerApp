<!-- Js -->

var counter = 10;
var counterStatus = true;

//var sbutton = document.querySelector('#start').addEventListener('click', function (){
	(function(){
  console.log('start');

  
    var timer = setInterval(function(){
  
      if(counter === 0){
       
        counterStatus = false;
        document.querySelector('#reset').style.display='none';
        clearInterval(timer);
      }
      console.log(counter);
      if(counter ===0)  console.log('TAKE OFF');
      counter--;
    }, 1000);
  

//})
})();

var rbutton = document.querySelector('#reset').addEventListener('click', function (){
	console.log('reset');
  if(!counterStatus) {
  	return;
  }
  counter = 30;
})
