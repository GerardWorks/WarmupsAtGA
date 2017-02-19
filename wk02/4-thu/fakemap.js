

var makeRow  = function(rowNumber){
  var arrayLine = [];
  for(var itemInRow = 0; itemInRow < rowNumber ; itemInRow++){
    arrayLine.push("A");
  }
  return arrayLine;
}
var addInX = function(array){
  var multiDimensionalArray = array;
  var rowRandomNumber = randomNumber(multiDimensionalArray[0].length);
  var columnRandomNumber = randomNumber(multiDimensionalArray.length);

  multiDimensionalArray[rowRandomNumber][columnRandomNumber] = 'X';
  convertToString(multiDimensionalArray);
}
var makeColumn = function(rowNumber,columnNumber){
  var mapArray = [];
  for(var numberLines = 0; numberLines < columnNumber; numberLines++){
    mapArray.push(makeRow(rowNumber));
  }
  addInX(mapArray);
}
var randomNumber = function(number){
  var randomizedNumber = Math.floor(Math.random() * (number-1));
  return randomizedNumber;
}
var convertToString = function(array){
  var mapWithX = [];

  for(var everyLine = 0; everyLine < array.length ; everyLine++){
    mapWithX += '['+ array[everyLine].join() + '] \n';
  }
  printOutToDom.innerHTML = ('[\n' + mapWithX + ']');
}
var makeFakeMap = function(row, column){
  makeColumn(row,column);
}

var activate = document.querySelector('.activate');
var rowInputs = document.querySelector('.row');
var columnInputs = document.querySelector('.column');
var printOutToDom = document.querySelector('.printOut');

activate.addEventListener('click', function(){
  makeFakeMap(parseInt(rowInputs.value),parseInt(columnInputs.value));
});


// var makeFakeMap = function(row,column){
//   mapRow = row;
//   var mapString = '';
//
//   console.log(mapString);
//   randomX(mapArray);
// }

//
// var randomX = function(array){
//   var multiArray = array;
//   var randomRow = randomNumber(mapRow);
//   var randomColumn = randomNumber(mapColumn);
//   console.log(randomRow);
//   console.log(randomColumn);
//
//   multiArray[randomRow][randomColumn] = 'X';
//   console.log(multiArray);
// }
