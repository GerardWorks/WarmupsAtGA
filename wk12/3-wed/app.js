var Allergies = function(amount){
  this.amount = amount;
}

Allergies.prototype.listOfAllergies = ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats'];

// Allergies.prototype = {
//   list: ['eggs','peanuts','shellfish','strawberries','tomatoes','chocolate','pollen','cats']
// }
// same as line 5 but written in different way

Allergies.prototype.list = function(){
  return this.listOfAllergies.filter(function(allergy,index){
    return Math.pow(2,index) & this.amount
  },this)
}

var allergies = new Allergies(34);
console.log(allergies.list());
