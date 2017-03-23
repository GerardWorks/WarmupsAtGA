var array_numbers = [2,6,4,8,1,2,9,5];

function get_squares(array){
  var new_array = array.map(function(x){
    return Math.pow(x,2);
  });
  var unique_array = new_array.filter(function(elem,index,self){
    return index == self.indexOf(elem);
  });
  console.log(unique_array.sort())
}
