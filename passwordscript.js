// var specialCharacters = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",",","."];

// // Array of numers characters to be included in password
// var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// // Array of lowercase characters to be included in password
// var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// // Array of uppercase characters to be included in password
// var upperCaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N''O','P','Q','R','S','T','U','V','W','X','Y','Z'];

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
//uppercase = window.prompt('Would you like to include uppercase letters?');

var response = confirm('Would you like to include uppercase letters?');
if ( response == true )
{
  alert('You chose to include uppercase letters.')
}
else{
  alert('You declined to include uppercase letters.')
}

//prompt: lowercase
//lowercase = window.prompt('Would you like to include lowercase letters?');
var response = confirm('Would you like to include lowercase letters?');
if ( response == true )
{
  alert('You chose to include lowercase letters.')
}
else{
  alert('You declined to include lowercase letters.')
}


//prompt: numbers
//numbers = window.prompt('Would you like to include numbers?');
var response = confirm('Would you like to include numbers?')
if ( response ==  true )
{
  alert('You have chosen to include numbers.')
}
else{
  alert('You declined to include numbers.')
}
//prompt: special
//special = window.prompt('Would you like to include special characters?');
var response = confirm('Would you like to include special characters?');
if ( response == true )
{
  alert('You have chosen to include special characters.')
}
else{
  alert('You have declined to include special characters.')
}

//concatenate

//?let uppercase = 
//let lowercase =
//let numbers = 
//let special = 
//str = `${uppercase} ${lowercase} ${numbers} ${special}` ;


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