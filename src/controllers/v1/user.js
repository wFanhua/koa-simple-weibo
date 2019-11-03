/**
 * @description 用户 controller
 * @author wfh
 */

const { getUserInfo, createUser, getUserInfoWithId } = require('../../services/user');
const { USER_IS_EXIST_C_M, USER_IS_NOT_EXIST_C_M, USER_NAME_OR_PSD_ERROR_C_M } = require('../../constants/user');
const { toFailRes, toSuccessRes } = require('../../utils/formatRes');
const { jwtSign } = require('../../utils/jwt');

async function isExist(userName) {
  // 获取用户信息
  const userInfo = await getUserInfo(userName);
  const userIsExist = userInfo !== null;
  // 统一返回格式
  return toSuccessRes(userIsExist);
}

/**
 * 注册用户
 * @param {String} userName 用户名
 * @param {String} password 密码
 * @param {Number} gender 性别
 */
async function register({ userName, password, gender }) {
  const userInfo = await getUserInfo(userName);
  if (userInfo) return toFailRes(...USER_IS_EXIST_C_M);
  const user = await createUser({ userName, password, gender });
  const token = jwtSign({ userId: user.id });
  const result = toSuccessRes(token);
  return result;
}

/**
 * 登录
 * @param {String} userName 用户名
 * @param {String} password 密码
 */
async function login({ userName, password }) {
  const userInfo = await getUserInfo(userName, password);
  if (!userInfo) return toFailRes(...USER_NAME_OR_PSD_ERROR_C_M);
  const token = jwtSign({ userId: userInfo.id });
  const result = toSuccessRes(token);
  return result;
}

/**
 * 根据用户id获取用户信息
 * @param {Number} userId 用户id
 */
async function info(userId) {
  const user = await getUserInfoWithId(userId);
  if (!user) return toFailRes(...USER_IS_NOT_EXIST_C_M);
  const result = toSuccessRes(user);
  return result;
}

module.exports = {
  isExist,
  register,
  login,
  info,
};
