// var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];

// // Array of numeric characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // Array of lowercase characters to be included in password
// var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // Array of uppercase characters to be included in password
// var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N''O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function generatePassword() {

  //length of password
  characterLength = prompt('How long would you like the password to be? Choose a length between 8 - 128');
    if (characterLength < 8 || characterLength> 128) {
      return ('Please choose a password length between 8 - 128 characters.')
    } else if (isNaN(characterLength)) {
      return ('Please enter a valid number')
    }
    else {
      alert ('Your password will be ' + characterLength + ' characters long');
    }


//prompt: uppercase no else if
uppercase = window.prompt('Would you like to include uppercase letters?');

//prompt: lowercase
lowercase = window.prompt('Would you like to include lowercase letters?');

//prompt: numbers
numbers = window.prompt('Would you like to include numbers?');

//concatenate


}

//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);