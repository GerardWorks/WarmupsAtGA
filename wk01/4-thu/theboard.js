//create a prompt for a pattern then use that pattern and convert it into an array with different length specified with prompt.

var symbol = "#";
var lengthColumns = 3;
var numberRows = 6;
var board = '';

for (var i = 1; i<=numberRows; i++){
  var columns = '';
    if(i%2==0){
      for (var num=0; num <lengthColumns; num++){
        columns += columns.concat(symbol + " ");
      }
    }else{
      for (var num=0; num <lengthColumns; num++){
        columns += columns.concat(" " + symbol);
      }
    }
    board += columns + "\n";
}
console.log(board);


// var convertToArray = symbol.split();
// console.log(convertToArray);
//
// for(var i=1; i<=length; i++){
//   var additionalSymbol = convertToArray.concat(convertToArray);
// }
// console.log(additionalSymbol.join(" "));
