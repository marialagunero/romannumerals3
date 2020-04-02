// business logic section
//take in user input, if userInput > 3,999 alert "not possible", else pass userInput into 'translate function
var tooLarge = function(userNumber) {
  console.log(userNumber);
  if (userNumber > 3999 ){
    alert('sorry, your number is too large. Roman numerals can only count to 3,999');
  } else {
    alert('number is useable');
    translate(userNumber);
  }
};


//Translate function: 
var translate = function(x) {
// 1. determine length of userInput
  var length = x.length();
// 2. if userInput.length is 1 digit, pass digit into 'ones' function.
  if (length === 1){
    onesFunction(x);
  }
// 3. else if userInput.length = 2, separate first and second digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position. return digits and combine them back for userOutput
// 4. else if userInput.length = 3, separate first,second and third digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position, use 'hundreds' function on digit in hundreds position. return digits and combine them back for userOutput
//5.  else userInput.length = 4, separate first,second, third and 4th digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position, use 'hundreds' function on digit in hundreds position. use 'thousands' function on digit in the thousands position. return digits and combine them back for userOutput
};

//var ones = function(userInput){};
var onesFunction = function(onesDigit){
 if (onesDigit === 1){ 
  alert('ones function is working kind of'+ onesDigit);
  //return 'I';
 } else if (onesDigit === 2) {
   alert('onesFunction working when input is 2' + ' ' +onesDigit);
   return 'II';
 } else if (onesDigit === 3){
   alert('onesFunction working when input is 3')
   return 'III';
 } else if (onesDigit === 4){
   return 'IV';
 }
};

onesFunction(3);

//var tens = function(userInput){};

//var hundreds = function(userInput){};

//var thousands = function(userInput){};


// ui logic
// take in user data, output translated number to page
$(document).ready(function(){
  $("form#numeralsForm").submit(function(event) {
    event.preventDefault(); 
    var userInput = parseInt($("#numbers").val());
    //var result = translate(userInput);
    var tooLargeOutput = tooLarge(userInput);
  });
});

// var ourFunction = function (parameter){ 
// alert('hi');
// alert(parameter);
// };

// ourFunction(userInput);