const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let resultStr = '';
  if (!options.repeatTimes) {
    resultStr += `${str}`;
    return resultStr + (`${options.addition}` || '');
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      resultStr += `${str}`;
      if (!options.additionRepeatTimes) {
        if (options.hasOwnProperty('addition')) {
          resultStr += `${options.addition}`;
        }
      } else {
        for (let j = 0; j < options.additionRepeatTimes; j++) {
          if (options.hasOwnProperty('addition')) {
            resultStr += `${options.addition}`;
          }
          if (options.additionRepeatTimes > 1 && j !== options.additionRepeatTimes - 1) {
            options.additionSeparator ? resultStr += options.additionSeparator : resultStr += '|';
          }
        }
      }
      if (options.repeatTimes > 1 && i !== options.repeatTimes - 1) {
        options.separator ? resultStr += options.separator : resultStr += '+';
      }
    }
  }
  return resultStr;
}

module.exports = {
  repeater
};
