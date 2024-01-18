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
  console.log("inside right password")
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
 }

function generatePassword(){
  password = ''
  allowedChars = ''
  var passwordLength = window.prompt("Please insert password length between 8-128");
  if(typeof passwordLength === "number") {
  }
    if(passwordLength < 8 || passwordLength > 128) {
  passwordLength = 8;
  window.alert("no acceptable number chosen, using default number");
    }
    var upperCase = window.confirm("Use Uppercase letters");

    if(upperCase) {
      window.alert("Uppercase letters included");
      allowedChars += uppercaseChars;
    }else{
      window.alert("Uppercase letters not included");
    }
    var lowerCase = window.confirm("Use Lowercase letters");
    if(lowerCase) {
      window.alert("Lowercase letters included");
      allowedChars += lowercaseChars;
    }else{
      window.alert("Lowercase letters not included");
    }
    
    var numbers = window.confirm("Use Numbers");
    if(numbers) {
      window.alert("Numbers included");
      allowedChars += numberChars;
    }else{
      window.alert("Numbers not included");
    }
    
    var symbols = window.confirm("Use Symbols");
    if(symbols) {
      window.alert("Symbols included");
      allowedChars += symbolsChars;
    }else{
      window.alert("Symbols not included");
    }
      for(let i = 0; i < passwordLength; i ++){
        var randomIndex = Math.floor(Math.random() * allowedChars.length);
        var random = allowedChars.charAt(randomIndex);
        password += random 
      }

  writePassword(password);
  console.log("Write password: ${password}");
    }
generateBtn.addEventListener("click", generatePassword);
