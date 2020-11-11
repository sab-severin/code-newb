// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];
const invalid6 = [2, 3, 4, 5, 2, 1, 2, 3, 4, 5, 1, 5 , 6, 7, 9];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

// FUNCTION 1: Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid.

const validateCred = (cardNumber) => {
  let total = 0; // variable 'total' is declared and initiliased with an integer of 0 ready for a sum of calculation below
  for (let i = cardNumber.length - 1; i >= 0; i-= 1 ) { //This for loop starts at the check digit, and decrements by one until the stopping condition is met, which in this case is index value of 0 (start of card number)
    // console.log(numArr[i]); this checks to see that the for loop iterates from right to left, one index at a time. It does not mutate original array
    let newArr = cardNumber[i] // delares new variable of reversed array, way around mutation of original array
    if ((cardNumber.length - 1 -i) % 2 === 1) // This acts as an external counter and works out if the element of the card number lies at the appropriate index value based on 16 digit and non 16 digit cards
    {
      newArr *= 2; // Multiplies element of index value calculated above by 2 as stated in Luhn Algorithm
      if (newArr > 9) {
        newArr -= 9; // states that if multiplied element is more than 9, then subtract 9
      }
    }
    total += newArr; // Sums up static array digits and looped doubled digits calculated. 
  }

  // Calculates sum modulo of 10. If this is 0 (zero remainder) then the output will be true. Otherwise it will will return as false
  if (total % 10 === 0) {
    return true;
   } else {
      return false; }
}


//console.log(validateCred(valid1)); // prints true
//console.log(validateCred(valid2)); // prints true
//console.log(validateCred(valid3)); // prints true
//console.log(validateCred(valid4)); // prints true
//console.log(validateCred(valid5)); // prints true
//console.log(validateCred(invalid1)); // prints false
//console.log(validateCred(invalid2)); // prints false
//console.log(validateCred(invalid3)); // prints false
//console.log(validateCred(invalid4)); // prints false
//console.log(validateCred(invalid5)); // prints false

// FUNCTION 2: Create function to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

const findInvalidCards = (nestedArray) => {
  var invalidCards = []; // array for storing invalid cards
  for (let i=0; i < nestedArray.length; i+= 1){
    let currCard = nestedArray[i]; // loop for going through each elements of nested array, new variable assigned to store the looped card numbers
    if (validateCred(currCard) === false){
      invalidCards.push(currCard); // if statement to check function variable 'validateCred' on looped output in new variable 'currCard'. If the results is strictly equal to false as indicated in Function 1, this would indicate card number is invalid. The .push method will then be activated for which the nested card arrays evaluating to false will be pushed into undefined variable 'invalidCards'. If results evaluate to true, output is null as no further instructions exist for function 2. 
    }
  }
  return invalidCards; // calling the variable to print card numbers to console
}


//console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); does not print anything, null
//console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); prints all card numbers in invalid cards nested arrays


// FUNCTION 3: Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies. 

const idInvalidCardCompanies = (nestedArray) => {
  var companies = []; // array for storing card companies issuing invalid cards
  
  for (let i=0; i < nestedArray.length; i += 1) {
    switch(nestedArray[i][0]) {
      case 3 : companies.push('Amex (American Express)');
      break;
      case 4 : companies.push('Visa');
      break;
      case 5 : companies.push('Mastercard');
      break;
      case 6 : companies.push('Discover');
      break;
      default : return 'Company not found';
    }
  }
  const uniqueSet = Array.from(new Set(companies)); //Set lets you store unique values and when passing in an array will remove duplicate values. Array.from converts Set back into an array
  return uniqueSet;
}

// console.log(idInvalidCardCompanies([invalid5])) prints 'Visa' correctly
// console.log(idInvalidCardCompanies([invalid6])) //prints 'Company not found' correctly
// console.log(idInvalidCardCompanies([invalid4])) prints 'Discover' correctly
// console.log(idInvalidCardCompanies([mystery3, mystery4, mystery5])); prints 'Discover', 'Visa' (no duplicates)

// console.log(idInvalidCardCompanies(batch)); 

// FUNCTION 4: create a function that accepts a string and converts it into an array of numbers like the initially provided arrays.

const string = '2, 3, 4, 5, 6, 7'
const string2 = '134567'

const stringToNum = (string) => {
  let newArr = string.split(', ').map(Number); // .split(', ') is used to split the string input into an array of substrings, returning the new array. The seperator in this instance is comma (,) if this is omitted and an empty " " is used as a seperator, the string is split between each character. The Number() operator converts string to a number, however if input includes other non numerical character's, it will log NaN. 
  return newArr;
}

//console.log(stringToNum(string)); Prints [2, 3, 4, 5, 6, 7]
//console.log(stringToNum(string2)); Prints [ 134567 ]