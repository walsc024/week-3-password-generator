// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Confirming with the user which characters they want to use
  var upperCase = confirm('Do you want Upper Case Letters?');
  var lowerCase = confirm('Do you want Lower Case?'); 
  var specialChar = confirm("Do you want special characters?");
  var numbers = confirm('Do you want numbers?');
  //Check to make sure they have selected something and alerting and returning a string if not
  if (upperCase === false && lowerCase === false && specialChar === false && numbers === false){
   alert('Please select at least one type of character');
   return ""; 
  }

  //Confirming what length of password the user wants
  var lengthPasswordString = prompt('What length do you want the password to be?')
  var lengthPasswordNumber = parseInt(lengthPasswordString); 
  // Check that the requested length meets the length requirements
  if (lengthPasswordNumber < 8 || lengthPasswordNumber > 128){
    alert('Please select a number greater than 7 but less than 129');
    return ""; 
  }

  var upperCaseOptions = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
  var lowerCaseOptions = "abcdefghijklmnopqrstuvwxyz"; 
  var numberOptions = "1234567890";
  var specialCharOptions = "!@£$%^&*()";
 
}

// Write password to the #password input
function writePassword() {
 var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
