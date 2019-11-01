/**
 * @description jwt-token相关常量
 * @author wfh
 */

const JWT_AUTH_C_M = [20003, '无访问权限'];
const JWT_EXPIRED_C_M = [20004, 'token已过期'];
const JWT_FAIL_C_M = [20005, 'jwt验证失败'];
const JWT_NOT_BEFORE_C_M = [20006, 'jwt未激活'];

module.exports = {
  JWT_AUTH_C_M,
  JWT_EXPIRED_C_M,
  JWT_FAIL_C_M,
  JWT_NOT_BEFORE_C_M,
};
