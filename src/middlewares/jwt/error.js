const {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} = require('jsonwebtoken');
const {
  JWT_AUTH_C_M,
  JWT_EXPIRED_C_M,
  JWT_FAIL_C_M,
  JWT_NOT_BEFORE_C_M,
} = require('../../constants/jwt');

module.exports = async (ctx, next) => {
  if (ctx.state && ctx.state.jwtOriginalError) {
    let errorRes;
    const originError = ctx.state.jwtOriginalError;
    if (originError instanceof JsonWebTokenError) {
      errorRes = ctx.fail(...JWT_EXPIRED_C_M);
    } else if (originError instanceof NotBeforeError) {
      errorRes = ctx.fail(...JWT_NOT_BEFORE_C_M);
    } else if (originError instanceof TokenExpiredError) {
      errorRes = ctx.fail(...JWT_FAIL_C_M);
    } else errorRes = ctx.fail(...JWT_AUTH_C_M);
    ctx.throw(401, originError.message, { errorRes });
  }
  await next();
};
