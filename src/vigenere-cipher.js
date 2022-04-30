const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  alphabet = { 'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9, 'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r': 17, 's': 18, 't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25, };
  constructor(bool) {
    this.directMachine = bool;
  }
  encrypt(str, key) {
    try {
      if (!str || !key) throw new Error('Incorrect arguments!');
      if (this.directMachine === true || this.directMachine === undefined) {
        return this.crypting(str, key);
      } else if (this.directMachine === false) {
        let resNoReverse = this.crypting(str, key);
        return resNoReverse.split('').reverse().join('');
      }
    } catch {
      throw new Error('Incorrect arguments!');
    }
  }
  decrypt(str, key) {
    try {
      if (!str || !key) throw new Error('Incorrect arguments!');
      if (this.directMachine === true || this.directMachine === undefined) {
        return this.decrypting(str, key);
      } else if (this.directMachine === false) {
        let resNoReverse = this.decrypting(str, key);
        return resNoReverse.split('').reverse().join('');
      }
    } catch {
      throw new Error('Incorrect arguments!');
    }
  }
  crypting(str, key) {
    let arrStrEncrypt;
    let arrKeyEncrypt;
    if (str.length > key.length) {
      let diffLength = Math.ceil(str.length / key.length);
      let newKey = key.repeat(diffLength);
      arrStrEncrypt = str.toLowerCase().split('');
      arrKeyEncrypt = newKey.toLowerCase().split('');
    } else {
      arrStrEncrypt = str.toLowerCase().split('');
      arrKeyEncrypt = key.toLowerCase().split('');
    }
    let arrResult = [];
    let iterForKey = 0;
    for (let i = 0; i < arrStrEncrypt.length; i++) {
      let curCharStr = arrStrEncrypt[i];
      let curCharKey = arrKeyEncrypt[iterForKey];
      if (this.alphabet.hasOwnProperty(curCharStr)) {
        let curNumStr = this.alphabet[curCharStr];
        let curNumKey = this.alphabet[curCharKey];
        let newNum = curNumKey + curNumStr >= 26 ? (curNumKey + curNumStr) - 26 : curNumKey + curNumStr;
        arrResult.push(newNum);
        iterForKey++;
      } else {
        arrResult.push(curCharStr);
      }
    }
    arrResult = arrResult.map(el => {
      let propsArr = Object.keys(this.alphabet);
      if (typeof el === 'number') {
        return propsArr[el];
      }
      return el;
    });
    return arrResult.join('').toUpperCase();
  }
  decrypting(str, key) {
    let arrStrEncrypt;
    let arrKeyEncrypt;
    if (str.length > key.length) {
      let diffLength = Math.ceil(str.length / key.length);
      let newKey = key.repeat(diffLength);
      arrStrEncrypt = str.toLowerCase().split('');
      arrKeyEncrypt = newKey.toLowerCase().split('');
    } else {
      arrStrEncrypt = str.toLowerCase().split('');
      arrKeyEncrypt = key.toLowerCase().split('');
    }
    let arrResult = [];
    let iterForKey = 0;
    for (let i = 0; i < arrStrEncrypt.length; i++) {
      let curCharStr = arrStrEncrypt[i];
      let curCharKey = arrKeyEncrypt[iterForKey];
      if (this.alphabet.hasOwnProperty(curCharStr)) {
        let curNumStr = this.alphabet[curCharStr];
        let curNumKey = this.alphabet[curCharKey];
        let newNum = curNumStr - curNumKey >= 0 ? curNumStr - curNumKey : curNumStr + 26 - curNumKey;
        arrResult.push(newNum);
        iterForKey++;
      } else {
        arrResult.push(curCharStr);
      }
    }
    arrResult = arrResult.map(el => {
      let propsArr = Object.keys(this.alphabet);
      if (typeof el === 'number') {
        return propsArr[el];
      }
      return el;
    });
    return arrResult.join('').toUpperCase();
  }
}

module.exports = {
  VigenereCipheringMachine
};
