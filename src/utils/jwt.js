/**
 * @description jwt 工具函数
 * @author wfh
 */

const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRES_IN } = require('../constants/jwt');

/**
 * jwt sign
 * @param {String|Object|Buffer} payload 签名信息
 * @returns {String} token
 */
function jwtSign(payload) {
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN,
  });
  return token;
}

module.exports = {
  jwtSign,
};
