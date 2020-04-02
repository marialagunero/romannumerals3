// business logic section
//take in user input, if userInput > 3,999 alert "not possible", else pass userInput into 'translate function
var tooLarge = function(userNumber) {
  if (userNumber > 3,999){
    alert('sorry, your number is too large. Roman numerals can only count to 3,999');
  } else {
    return translate(userNumber);
  }
};


//Translate function: 
// 1. determine length of userInput
// 2. if userInput.length is 1 digit, pass digit into 'ones' function.
// 3. else if userInput.length = 2, separate first and second digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position. return digits and combine them back for userOutput
// 4. else if userInput.length = 3, separate first,second and third digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position, use 'hundreds' function on digit in hundreds position. return digits and combine them back for userOutput
//5.  else userInput.length = 4, separate first,second, third and 4th digits. use 'ones' function on digit in ones position, use 'tens' function on digit in tens position, use 'hundreds' function on digit in hundreds position. use 'thousands' function on digit in the thousands position. return digits and combine them back for userOutput

//var ones = function(userInput){};

//var tens = function(userInput){};

//var hundreds = function(userInput){};

//var thousands = function(userInput){};


// ui logic
// take in user data, output translated number to page
$(document).ready(function(){
  $("form#numeralsForm").submit(function(event) {
    event.preventDefault(); 
    var userInput = $("#numbers").val();
    alert("hi");
    var result = translate(userInput);
    


  });

});