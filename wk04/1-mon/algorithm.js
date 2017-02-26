var findPrime = function(start, end){
  for(var prime = start; prime<=end; prime++){
    for(var i=start; i<=end; i++){
      if(prime%i===0){
        var someMath = prime/i;
        if(someMath==1){
          console.log(prime);
        }
      }
    }
  }
}
