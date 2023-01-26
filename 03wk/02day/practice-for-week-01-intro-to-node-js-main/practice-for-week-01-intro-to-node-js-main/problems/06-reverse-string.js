/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) {
  let stringy = string.split('-');
  let stringReversed = [];

  for (let i = stringy.length - 1; i >= 0; i--) {
    stringReversed.push(stringy[i]);
  }

  return stringReversed.join('-');
}

console.log(reverseString("Go-to-the-store"));
console.log(reverseString("Jump,-jump-for-joy"));

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = reverseString;
