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

function getUpperCaseLetters(){
  var uppCaseLetters = characterLooper(65, 91);
  
  var i = Math.floor(Math.random() * uppCaseLetters.length);
return uppCaseLetters[i];
}

function getLowerCaseLetters(){
  var lowCaseLetters = characterLooper(97, 123);  
    
  var i = Math.floor(Math.random() * lowCaseLetters.length);
return lowCaseLetters[i];
}

function getAllNumbers(){
  var numCharacters = characterLooper(48, 58);  
  
  var i = Math.floor(Math.random() * numCharacters.length);
return numCharacters[i];
}

function generatePassword(){
  var password = '';
  var index = [];
  var userInput = 0;
  var upperCaseLetters = getUpperCaseLetters();
  var numCharacters = getAllNumbers();
  var lowCaseLetters = getLowerCaseLetters();
  var specialCharacter = specialCharA();
  var numOfChar = 0;

  userInput =  window.prompt("How many characters would you like your password to contain?");

  if((isNaN(userInput)) || userInput <= 7 || userInput >= 129){
    window.alert("please enter a valid number");
     return null
  }
  else{
    window.confirm("Click ok to confirm including special characters.");
    window.confirm("Click ok to confirm including numeric characters");
    window.confirm("Click ok to confirm including lowercase letters");
    window.confirm("Click ok to confirm including uppercase letters");
  }

    while(numOfChar < userInput && userInput > 7 && userInput < 129){
      if(numOfChar < userInput){
         specialCharacter = specialCharA();
        index.push(specialCharacter);
        numOfChar += 1;
      }
      if(numOfChar < userInput){
         numCharacters = getAllNumbers();
        index.push(numCharacters);
        numOfChar += 1;
      }
      if(numOfChar < userInput){
        var lowCaseLetters = getLowerCaseLetters();
        index.push(lowCaseLetters);
        numOfChar += 1;
      }
      if(numOfChar < userInput){
         upperCaseLetters = getUpperCaseLetters();
        index.push(upperCaseLetters);
        numOfChar += 1;
      }
    }

    password = index.join(""); 
  return password; 
}


  
