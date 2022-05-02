const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  let curDns = '';
  for (let i = 0; i < domains.length; i++) {
    let arrDns = domains[i].split('.').reverse();
    for (let j = 0; j < arrDns.length; j++) {
      curDns += `.${arrDns[j]}`;
      if (!dns[curDns]) {
        dns[curDns] = 1;
      } else {
        dns[curDns]++
      }
    }
    curDns = '';
  }
  return dns;
}

module.exports = {
  getDNSStats
};
