var stringA = "xyaabbbccccdefww";
var stringB = "xxxxyyyyabklmopq";

var combineString = function(stringA, stringB){
  var arrayA = stringA.split('');
  var arrayB = stringB.split('');

  var combineArray = arrayA.concat(arrayB);
  var uniqueArray = combineArray.filter(function(elem, pos){
    return combineArray.indexOf(elem) === pos;
  })
  uniqueArray.sort();
  console.log(uniqueArray);
}
