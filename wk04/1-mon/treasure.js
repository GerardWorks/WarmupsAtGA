var map1 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","X","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"]
];

var map2 = [
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","A","A","A","A"],
["A","X","A","A","A"]
];

var map3 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","X"],
["A","V","A","A","A"]
];

var map4 = [
["A","A","A","A","A"],
["A","A","V","A","A"],
["A","A","A","V","A"],
["v","v","V","v","A"],
["X","V","A","A","A"]
];

var holyGrailMap = [
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","V","v","S","S"],
["v","v","G","v","S","S"],
["v","v","H","v","S","S"],
["v","v","V","v","S","S"],
["A","V","A","A","A","S"]
];


var treasureFinder = function(array,symbol){
  var foundX = [];
  var findx = function(element){
    return element === symbol;
  }

  for(var i=0; i<array[0].length;i++){
    foundX[i] = array[i].some(findx);
    if(foundX[i]===true){
      var row = i;
      var column = array[i].indexOf(symbol);
    }else{
      foundX[i] = false;
    }
  }
  if(symbol === 'V'){
    return console.log("that doesnt belong in a museum!");
  }else{
    return console.log(row, column);
  }
}
