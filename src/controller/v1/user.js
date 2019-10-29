/**
 * @description 用户 controller
 * @author wfh
 */

const { getUserInfo } = require('../../service/user');

async function isExist(ctx, next) {
  // 获取用户信息
  const userName = ctx.query && ctx.query.userName;
  const userInfo = await getUserInfo(userName);
  const userIsExist = userInfo !== null;
  // 统一返回格式
  ctx.body = ctx.success(userIsExist);
  await next();
}

module.exports = {
  isExist,
};
