// Quiz - Decode this message!
//
// Write a program to decode this message:
//
// FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.
//
// This is a form of cryptography known as the Caesar Cipher. It has a shift parameter of 3.
//
// The alphabet is normally:
//
// ABCDEFGHIJKLMNOPQRSTUVWXYZ
//
// The alphabet with the shift parameter of 3 is now as follows:
//
// DEFGHIJKLMNOPQRSTUVWXYZABC

var sentence = "FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.";

var splitSentence = function(sentence){
  var arraySentence = sentence.split('');
  getNumber(arraySentence);
}

var getNumber = function(array){
  var numberArray = [];
  for(var i=0; i<array.length; i++){
     numberArray[i] = array[i].charCodeAt();
  }
  // console.log(numberArray);
  addShift(numberArray);
}
var addShift = function(array){
  var addShiftArray = array.map(function(num){
    if(num<65 || num>90){
      return num;
    }else if(num===65){
      return num = 88;
    }else if(num===66){
      return num = 89;
    }else if(num===67){
      return num = 90;
    }else {
      return num - 3;
    }
  })
  // console.log(addShiftArray);
  convertToChar(addShiftArray);
}

var convertToChar = function(array){
  var convertedArray = [];
  for(var num=0; num<array.length; num++){
    convertedArray[num]=String.fromCharCode(array[num]);
  }
  console.log(convertedArray.join(""));
}
splitSentence(sentence);
