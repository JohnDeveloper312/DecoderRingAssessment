// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// The Caesar Shift is a type of substitution cipher originally used by Julius Caesar 
// to protect messages of military significance. It relies on taking the alphabet 
// and "shifting" letters to the right or left, based on the typical alphabetic order.

// For example, if you were to "shift" the alphabet to the right by 3, 
// the letter "A" would become "D".

// "thinkful" -> "wklqnixo"

// When decoding the message, you need to know the number the original 
// message was shifted by so that you can shift in the opposite direction.

// caesar()
// The caesar() function in the src/caesar.js file has three parameters:

// -  input refers to the inputted text to be encoded or decoded.
// -  shift refers to how much each letter is "shifted" by. A positive number means shifting to 
//    the right (i.e. "A" becomes "D") whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// -  encode refers to whether you should encode or decode the message. By default it is set to true.

// When building the function, keep the following constraints and rules in mind:
// -  If the shift value is not present, equal to 0, less than -25, or greater than 25, the function should return false.
// -  Spaces should be maintained throughout, as should other non-alphabetic symbols.
// -  Capital letters can be ignored.
// -  If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").

// Examples:
// caesar("thinkful", 3); //> 'wklqnixo'
// caesar("thinkful", -3); //> 'qefkhcri'
// caesar("wklqnixo", 3, false); //> 'thinkful'

// caesar("This is a secret message!", 8); //> 'bpqa qa i amkzmb umaaiom!'
// caesar("BPQA qa I amkzmb umaaiom!", 8, false); //> 'this is a secret message!'

// caesar("thinkful"); //> false
// caesar("thinkful", 99); //> false
// caesar("thinkful", -26); //> false

const caesarModule = (function () {
  const boundaries = {
    start: "a".charCodeAt(),
    end: "z".charCodeAt(),
  }
  function caesar(input, shift, encode = true) {
    if (!shift) return false;
    if (shift < -25 || shift > 25) return false;
    if (!encode) shift *= -1; //if encoding is false shift back 1

    input = input.toLowerCase()
    return input.split("").reduce((acc, character) => {
      const indexCode =  character.charCodeAt(); //index of the character
      if (indexCode < boundaries.start || indexCode > boundaries.end) return acc + character;//if index is less than a or greater than z
      let shifted = indexCode + shift;//the index character and shifted amount 
      if (shifted > boundaries.end) {
        shifted = boundaries.start + (shifted - boundaries.end - 1)
      } else if (shifted < boundaries.start) {
        shifted = boundaries.end - (boundaries.start - shifted - 1)
      }
      return acc + String.fromCharCode(shifted)
    }, "");
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };


