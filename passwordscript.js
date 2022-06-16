//selecting button with id
var generateBtn = document.querySelector('#generate');

// Add event listener to generate button, click generates window alerts 
generateBtn.addEventListener("click", writePassword);

var specialCharacters = "!#$%&()*+,-./:;<=>?@[]^_{|}~";


// // Array of numbers characters to be included in password
var numbersCharacters = "1234567890";


//Create an array of lower case letters 
var LowerCase = "abcdefghijklmnopqrstuvwxyz";

// // Array of uppercase characters to be included in password
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//create final empty array
var finalArray = [];

var isLowerCase, isUpperCase, isNum, isSC;
var passwordLength;

function writePassword() {

  //length of password
  passwordLength = window.prompt('How long would you like the password to be? Choose a length between 8 - 128');
    if (passwordLength >= 8 && passwordLength <= 128) {
      window.confirm('You password is ' + characterLength + 'charactersLong')
    }
    else {
      window.alert ('This needs a value');
    }

    // ask user if they want LOWER CASE LETTER 
   isLowerCase = window.confirm ("Will your password include lowercase letters?");
   if (isLowerCase) {
window.alert("Your password will include lowercase letters.");
}  else {
window.alert("Your password will not include lowercase letters.");
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
// ask user if they want LOWER CASE LETTER 
isLowerCase = window.confirm ("Will your password include lowercase letters?");
if (isLowerCase) {
window.alert("Your password will include lowercase letters.");
}  else {
window.alert("Your password will not include lowercase letters.");
}
cases - add lower case to the final array 
if(isLowerCase) { //true 
finalArray += LowerCase; 
}
if (isUpperCase) { //true 
finalArray += UpperCase; 
}
if (isNum) { //true 
finalArray += Num; 
}
if (isSC) { //true 
finalArray += SC 
}

console.log(finalArray)

//Create random selection variables 
//for loop of length = user required length of password 
for (var i = 0; i <= passwordLength - 1; i++) {
password += finalArray.charAt(Math.floor(Math.random() * finalArray.length));
}

// This puts the password value into the textbox, changes function input to use textcontent  
var passwordText = document.querySelector("#password");
passwordText.value = password;

};


  //var renderedPassword = [];

//var array1 = [uppercase, lowercase, numbers, special];
  //if (uppercasePrompt) {
  //renderedPassword = renderedPassword.concat(...uppercase)
}

//Assignment Code


//Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
};

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);