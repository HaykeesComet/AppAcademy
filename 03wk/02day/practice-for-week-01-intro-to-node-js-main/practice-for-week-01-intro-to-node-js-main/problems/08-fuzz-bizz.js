/******************************************************************************
Write a function fuzzBizz(max) that returns an array of numbers under
the max. Each number should be either divisible by 2 or 7, BUT NOT BOTH.

Examples:

fuzzBizz(17) => [ 2, 4, 6, 7, 8, 10, 12, 16 ]
fuzzBizz(30) => [ 2, 4, 6, 7, 8, 10, 12, 16, 18, 20, 21, 22, 24, 26 ]
*******************************************************************************/

function fuzzBizz(max) {
  let fzBz = [];

  for (let i = 1; i < max; i++) {
    if ((i % 2 === 0) && (i % 7 !== 0)) {
      fzBz.push(i);
    }
    else if ((i % 2 !== 0) && (i % 7 === 0)) {
      fzBz.push(i);
    }
  }

  return fzBz;
}

console.log(fuzzBizz(17));
console.log(fuzzBizz(30));

/****************** DO NOT MODIFY ANYTHING UNDER THIS  LINE ******************/
module.exports = fuzzBizz;
