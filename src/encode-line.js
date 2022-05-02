const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  console.log(str);
  let newLine = '';
  let repeatChar;
  let numRepeat = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      repeatChar = str[i];
      numRepeat++;
    } else {
      if (numRepeat > 1) {
        newLine += `${numRepeat}${repeatChar}`;
        repeatChar = '';
        numRepeat = 1;
      } else {
        newLine += str[i];
      }
    }
  }
  return newLine;
}

module.exports = {
  encodeLine
};
