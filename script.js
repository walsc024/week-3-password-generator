// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var upperCase = confirm('Do you want Upper Case Letters?');
  var lowerCase = confirm('Do you want Lower Case?'); 

}

// Write password to the #password input
function writePassword() {
 var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
