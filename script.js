// Assignment Code
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
  var passwordLength = prompt("Please insert password between 8-128");
  if(passwordLength < 8) {
    alert("Password too short");
    return;
  }
  if(passwordLength > 128) {
    alert("Password too long");
    return;
  }

var upperCase = window.prompt("Would you like use Uppercase letters");
if(upperCase) {
  userSelection.push(upperCase);
}
var lowerCase = window.prompt("Would you like use Lowercase letters");
if(lowerCase) {
  userSelection.push(lowerCase);
}

var numbers = window.prompt("Would you like to use Numbers");
if(numbers) {
  userSelection.push(numbers);
}

var symbols = window.prompt("Would you like to use Symbols");
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

