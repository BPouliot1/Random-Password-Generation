//Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChars = "0123456789";
var symbolsChars = "!@#$%^&*()_+-=";
let password = "";
let allowedChars = "";

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
  var passwordLength = window.prompt("Please insert password length between 8-128");
  if(typeof passwordLength === "number") {
  }
    if(passwordLength < 8 || passwordLength > 128) {
  passwordLength = 8;
  window.alert("no acceptable number chosen, using default number");
    } else {
      var passwordLength = passwordLengthInput;
      return;
    }
  


var upperCase = window.confirm("Would you like use Uppercase letters");
if(upperCase) {
  userSelection.push(upperCase);
}
var lowerCase = window.confirm("Would you like use Lowercase letters");
if(lowerCase) {
  userSelection.push(lowerCase);
}

var numbers = window.confirm("Would you like to use Numbers");
if(numbers) {
  userSelection.push(numbers);
}

var symbols = window.confirm("Would you like to use Symbols");
if(symbols) {
  userSelection.push(symbols);
}

console.log("user selection = " + userSelection);
if (userSelection.length === 0)
return;

  for(let i = 0; i < length; i ++){
    var randomIndex = Math.floor(Math.random() * userSelection);
    var random = userSelection.charAt(randomIndex);
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword,);

writePassword(password);
console.log("Write password: ${password}");

