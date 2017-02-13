// Write a function 'grannyTalk' what takes a question as an argument and returns a string as her response.
//
// If you talk to Granny normally, she'll reply "SPEAK UP SONNY JIM"
//
// If you talk to her in ALL CAPS, she'll reply "NO, NOT SINCE 1945"
//
// The year will be a random year between 1930 and 1950.
//
// If you say "BYE" to her she'll reply "What's that honey, I didn't hear you.."
//
// bonus: write an additional function 'grandpaTalk' that when called, will call granny for you and interpret her responses incorrectly by swapping vowels randomly in the words of her responses.
//
// sample output of grandpaTalk:
//
// // NO, NOT SINCE incorrect year // whats that sunny
console.log("this is working");

var grannyQuestion = function(question){
  var reply;
  if(question == "BYE"){
    reply = "What's that honey, I didn't hear you.."
  }else if(question == question.toLowerCase()){
    reply = "SPEAK UP SONNY JIM";
  }else if(question == question.toUpperCase()){
    randomYear  = Math.round(Math.random() * 20 + 1930);
    reply = "NO, NOT SINCE " + randomYear;
  }
  return reply;
}

var randomizer = function(min, max){
  return (Math.floor(Math.random() * (max-min) + 0));
}

var grandpaQuestion = function(question){
  var reply = [];
  var vowelsU = ["A", "E", "I", "O", "U"];
  var vowelsL = ["a", "e", "i", "o", "u"];
  var randomVowel1 = vowelsU[randomizer];
  var randomVowel2 = vowelsL[randomizer];
  var granny = grannyQuestion(question).split("");

  for(var i=0; i<granny.length; i++){
    if(vowelsL.includes(granny[i])){
      reply[i] = vowelsL[randomizer(0,5)];
    }else if(vowelsU.includes(granny[i])){
      reply[i] = vowelsU[randomizer(0,5)];
    }else{
      reply[i] = granny[i];
    }
  }
  var replyJoin = reply.join('');
  return replyJoin;
}
