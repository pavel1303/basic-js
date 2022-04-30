const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  'chain': [],
  getLength() {
    return chainMaker.chain.length;
  },
  addLink(value) {
    if (value === '') {
      chainMaker.chain.push('()');
    } else {
      chainMaker.chain.push(`( ${value} )`);
    }
    return chainMaker;
  },
  removeLink(position) {
    try {
      if (!chainMaker.chain[position - 1] ||
        position % 1 !== 0 ||
        typeof position !== 'number') {
        throw new Error("You can't remove incorrect link!");
      } else {
        delete chainMaker.chain[position - 1];
        chainMaker.chain = chainMaker.chain.filter(el => el !== '');
        return chainMaker;
      }
    } catch {
      chainMaker.chain = [];
      throw Error("You can't remove incorrect link!");
    }
  },
  reverseChain() {
    chainMaker.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    let resultChain = chainMaker.chain.filter(el => el !== '').join('~~');
    chainMaker.chain = [];
    return resultChain;
  }
};

module.exports = {
  chainMaker
};
