const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = [];
  let clearSortArray = arr.filter(el => el != -1).sort((a, b) => a - b);
  let counter = 0;
  arr.forEach((el, i, arr) => {
    if (el === -1) {
      result[i] = el;
    } else {
      result[i] = clearSortArray[counter];
      counter++;
    }
  });
  return result;
}

module.exports = {
  sortByHeight
};
