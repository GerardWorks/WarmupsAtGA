console.log("i am all logged in")

clockNum = ["1", "2", "3", "4","5","6","7","8","9","10","11","12"];
var num = 0;

function secondHand(num){
  console.log(num)
  timeSecond = num * 360/60
  $('.seconds').css('transform',"rotate("+ timeSecond +"deg)")
}

function time(){
  num += 1;
  // console.log(num)
  secondHand(num);
  hourHand(num);
}
setInterval(time,1000)
