console.log('SPLIT THE BILL')

// var group = {
//     A: 20,
//     B: 15,
//     C: 10
// }

var group = {
    A: 21,
    B: 16,
    C: 12,
    D: 52,
    E: 19,
    F: 5
}

function splitTheBill(group){
  var balance = {};
  var numberOfKeys = Object.keys(group).length
  var totalSum = 0;
  for(var key in group){
    totalSum += group[key]
  }
  var average = totalSum/numberOfKeys;

  for (var key in group){
    var value = group[key] - average;
    var checkForDecimals = value.toString().split(".")
    if(checkForDecimals[1]){
      var newValue = value.toFixed(2);
      balance[key] = parseFloat(newValue);
    }else{
      balance[key] = value;
    }
  }
  return console.log(balance)
}

splitTheBill(group)
