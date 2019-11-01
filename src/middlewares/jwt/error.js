const { JWT_AUTH_C_M } = require('../../constants/jwt');

module.exports = async (ctx, next) => {
  if (ctx.state && ctx.state.jwtOriginalError) {
    const errorRes = ctx.fail(...JWT_AUTH_C_M);
    ctx.throw(401, ctx.state.jwtOriginalError.message, { errorRes });
  }
  await next();
};
