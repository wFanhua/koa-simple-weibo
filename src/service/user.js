/**
 * @description User service
 * @author wfh
 */

const db = require('../models/index');
const { cryptoPassword } = require('../utils/cryp');
const { formatUsers } = require('./format/index');

/**
  * 获取用户信息
  * @param {string} username 用户名
  * @param {string} password 密码
  * @returns {null|Object} 格式化后的用户信息
  */
async function getUserInfo(username, password) {
  // 查询条件
  const whereOpt = {
    username,
  };

  if (password) Object.assign(whereOpt, { password });

  // 查询
  const user = await db.User.findOne({
    attributes: ['id', 'userName', 'nickName', 'gender', 'picture', 'city'],
    where: whereOpt,
  });
  if (user === null) return null;
  // 格式化信息
  const result = user && formatUsers(user.dataValues);

  return result;
}

/**
 * 创建用户
 * @param {String} userName 用户名
 * @param {String} password 密码
 * @param {Number} gender 性别
 * @param {String} nickName 昵称
 */
async function createUser({
  userName, password, gender = 3, nickName,
}) {
  const user = await db.User.create({
    userName,
    password: cryptoPassword(password),
    gender,
    nickName: nickName || userName,
  });
  const result = formatUsers(user.dataValues);
  return result;
}

module.exports = {
  getUserInfo,
  createUser,
};
