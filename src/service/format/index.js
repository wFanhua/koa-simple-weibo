/**
 * @description 数据格式化
 * @author wfh
 */
const _ = require('lodash');
const { USER_DEFAULT_PICTURE } = require('../../constants/user');

function formatUserPicture(user) {
  if (user.picture === null) Object.assign(user, { picture: USER_DEFAULT_PICTURE });
  return user;
}
/**
 * 格式化用户信息
 * @param {Array|Object} list 用户列表或单个user对象
 * @returns {null|Object|Array} 格式化后的用户
 */
function formatUsers(list) {
  if (list === null) return list;
  const format = _.flowRight([
    formatUserPicture,
  ]);
  if (!Array.isArray(list)) return format(list);
  return list.map(format);
}

module.exports = {
  formatUsers,
};
