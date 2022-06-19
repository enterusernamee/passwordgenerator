var specialCharacters = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "{",
  "}",
  "[",
  "]",
  "=",
  "<",
  ">",
  "/",
  ",",
  ".",
];

// Array of numbers characters to be included in password
var numbersCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCaseCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var selectedCharacter = [];
var passwordString = '';

function generatePassword() {
  //length of password
  characterLength = prompt(
    "How long would you like the password to be? Choose a length between 8 - 128"
  );
  if (characterLength < 8 || characterLength > 128) {
    return "Please choose a password length between 8 - 128 characters.";
  } else if (isNaN(characterLength)) {
    return "Please enter a valid number";
  } else {
    alert("Your password will be " + characterLength + " characters long");
  }

  //uppercase = window.prompt('Would you like to include uppercase letters?');

  var upperCase = confirm("Would you like to include uppercase letters?");
  if (upperCase == true) {
    alert("You chose to include uppercase letters.");
    selectedCharacter = selectedCharacter.concat(upperCaseCharacters);
  } else {
    alert("You declined to include uppercase letters.");
  }

  //prompt: lowercase
  //lowercase = window.prompt('Would you like to include lowercase letters?');
  var lowerCase = confirm("Would you like to include lowercase letters?");
  if (lowerCase == true) {
    alert("You chose to include lowercase letters.");
    selectedCharacter = selectedCharacter.concat(lowerCasedCharacters);
  } else {
    alert("You declined to include lowercase letters.");
  }

  //prompt: numbers
  //numbers = window.prompt('Would you like to include numbers?');
  var numbers = confirm("Would you like to include numbers?");
  if (numbers == true) {
    alert("You have chosen to include numbers.");
    selectedCharacter = selectedCharacter.concat(numbersCharacters);
  } else {
    alert("You declined to include numbers.");
  }
  //prompt: special
  //special = window.prompt('Would you like to include special characters?');
  var special = confirm("Would you like to include special characters?");
  if (special == true) {
    alert("You have chosen to include special characters.");
    selectedCharacter = selectedCharacter.concat(specialCharacters);
  } else {
    alert("You have declined to include special characters.");
  }
  console.log(selectedCharacter);
  //concatenate

  //?let uppercase 
  var passwordString = [];

if (upperCase)  {
  passwordString = passwordString.concat(upperCase)
}
if (lowerCase)  {
  passwordString = passwordString.concat(lowerCase)
}
if (numbersCharacters
  ) passwordString = passwordString.concat(numbers)
}

if (specialCharacters
  ) passwordString = passwordString.concat(specialCharacters)


// Generating password
var endPassword = [];  
for(var i = 0; i < passwordString; i++)  {

  endPassword.push(renderedPassword[Math.floor(Math.random() * renderedPassword.length)]); 
}

var renderedPassword = function() {
return endPassword.join('');
}


  //arr.splice(0, arr.length)

  //let lowercase =
  //let numbers =
  //let special =
  //str = `${uppercase} ${lowercase} ${numbers} ${special}` ;

//Assignment Code
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
