/**
 * @description 加密/解密
 * @author wfh
 */

const crypto = require('crypto');
const { CRYP_SECRET_KEY } = require('../constants/cryp');

function md5(content) {
  const hash = crypto.createHash('md5');
  return hash.update(content).digest('hex');
}

function cryptoPassword(password) {
  const content = `password=${password}&key=${CRYP_SECRET_KEY}`;
  return md5(content);
}

module.exports = {
  md5,
  cryptoPassword,
};
