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


function generatePassword(){
  var password
  var specialChar = """!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  console.log()


  // hint: var specialChar = """!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  // console.log(specialChar[1]);
  //ask for the length of pw
  // validate response pw
  return password;

}

// Note:
// inputs are gonna be strings