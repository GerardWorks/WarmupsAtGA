var word = "a ABSDBt ..tuba";
word= word.toLowerCase();


var notText = function(text){
  if(text<'a' || text >'z'){
    return false;
  }else{
    return true;
  }
}

var breakWord = function(word){
  var wordToBreak = word;
  var wordArray = wordToBreak.split('').filter(notText);
  console.log(wordArray);
  return checkLetters(wordArray);
}


var checkLetters = function(wordArray){
  var arrayCheck = wordArray;
  var truthyArray = [];

  for(var i=arrayCheck.length; i>0; i--){
    if(arrayCheck[i-1]===wordArray[arrayCheck.length-i]){
      truthyArray[i] = true;
    }else {
      truthyArray[i] = false;
    }
  }

  if(truthyArray.includes(false)){
    console.log("the word is not a palindrome");
  }else{
    console.log("the word is a palindrome");
  }

}
breakWord(word);
