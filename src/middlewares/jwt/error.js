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

const { toFailRes } = require('../../utils/formatRes');

module.exports = async (ctx, next) => {
  if (ctx.state && ctx.state.jwtOriginalError) {
    let errorRes;
    const originError = ctx.state.jwtOriginalError;
    if (originError instanceof JsonWebTokenError) {
      errorRes = toFailRes(...JWT_EXPIRED_C_M);
    } else if (originError instanceof NotBeforeError) {
      errorRes = toFailRes(...JWT_NOT_BEFORE_C_M);
    } else if (originError instanceof TokenExpiredError) {
      errorRes = toFailRes(...JWT_FAIL_C_M);
    } else errorRes = toFailRes(...JWT_AUTH_C_M);
    ctx.throw(401, originError.message, { ctxBody: errorRes });
  }
  await next();
};
