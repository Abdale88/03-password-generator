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

function specialCharA(){
  var specialCharacter = characterLooper(33, 47).concat(characterLooper(58, 64)).concat(characterLooper(91, 96)).concat(characterLooper(123, 126)); 
 
  var i = Math.floor(Math.random() * specialCharacter.length);
return specialCharacter[i];
}
  
