var multiple = 1;
var $container = $('.container')

function honeyPot(num){
  return $('<span>').addClass('honeypot').attr('id',num).text(num).css('background-color','black')
}

for(var i=0; i<100;i++){
  $container.append(honeyPot(i+1));
}

function iterativePass(num){
  multiple = num+1;
  for(var i=0; i<100; i++){
    var selectedId = multiple * (i+1);
    if(selectedId<=100){
      var divSelectedColor = $('#'+selectedId)[0].style.backgroundColor;
      if(divSelectedColor === 'red'){
        $('#'+selectedId).css("background-color","black");
      }else if(divSelectedColor === 'black'){
        $('#'+selectedId).css("background-color","red");
      }
    }else{
      break;
    }
  }
}

for(var j=0;j<100;j++){
  iterativePass(j)
}
