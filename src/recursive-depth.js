const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {

  }
  calculateDepth(arr) {
    let depthNested = 1;
    for (let i = 0; i <= arr.length - 1; i++) {
      let currentNest = 1;
      if (arr[i] instanceof Array) {
        currentNest += this.calculateDepth(arr[i]);
      }
      currentNest > depthNested ? depthNested = currentNest : false;
    }
    return depthNested;
  }
}

module.exports = {
  DepthCalculator
};
