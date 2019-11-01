const jwt = require('koa-jwt');
const error = require('./error');
const whiteList = require('./whitelist');

module.exports = (app) => {
  app.use(jwt({
    secret: process.env.JWT_SECRET || '12345wfh09876',
    passthrough: true,
    getToken(ctx) {
      // 从headers的jwt-token字段中读取token
      const jwtToken = ctx.header && ctx.header['jwt-token'];
      return jwtToken;
    },
  }).unless({
    path: whiteList,
  }));
  app.use(error);
};
