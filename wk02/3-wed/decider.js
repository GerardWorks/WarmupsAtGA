var decision;
var headTally=0;
var tailTally=0;
var image = document.getElementById('coin');

var randomNumber = function(){
  var number = Math.floor(Math.random()*10);
  return number;
}

var coinFlip = function(){
  var head = 0;
  var tail = 0;
  var number;

  while(head<5 && tail<5){
    var number = randomNumber();
    if(number<5){
      head++;
    }else{
      tail++;
    }
  }
  if(head===5){
    console.log("HEAD");
    decision = "HEADS";
    headTally++;
    returnResult(decision);
  }else{
    console.log("TAILS");
    decision = "TAILS";
    tailTally++;
    returnResult(decision);
  }
  spinImage();
}

var spinImage = function(){

  var degrees = 0;
  image.style.transition = 'all 2s linear';

  while(degrees<1800){
    degrees +=10;
  }
  image.style.transform = 'rotateX('+ degrees +'deg)';
  if(degrees>=1800){
    degrees = 0;
    if(decision==="HEADS"){
      setTimeout(imageChangeHead, 2500);
      setTimeout(resetSpin, 5000);
    }else{
      setTimeout(imageChangeTail, 2500);
      setTimeout(resetSpin, 5000);
    }
  }
}
var resetSpin = function(){
  image.style.transition = '';
  image.style.transform = '';
  image.src = 'http://www.psdgraphics.com/file/gold-coin-icon.jpg';
}
var imageChangeHead = function(){
  image.src = "https://bollegarn.com/wp-content/uploads/2016/04/16cj_a.jpg";

}
var imageChangeTail = function(){
  image.src = "http://www.perthmint.com.au/images/product/500/3644-chinese-astrological-series-2015-year-of-the-goat-prosperity-one-fifth-oz-gold-coin-reverse.jpg"
}

var returnResult = function(text){
  decision = text;
  var resultText = document.getElementById('result');
  resultText.innerText = decision;
  var headText = document.getElementById('headTally');
  headText.innerText = headTally;
  var tailText = document.getElementById('tailTally');
  tailText.innerText = tailTally;
}

var coinButton = document.getElementById('coin');
coinButton.addEventListener('click',coinFlip);
