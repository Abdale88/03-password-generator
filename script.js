// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function characterLooper(low, high){
  var arrLoop = [];
  for(var i = low; i <= high; i++){
    arrLoop.push(String.fromCharCode(i));
  }
  return arrLoop;
}
  
