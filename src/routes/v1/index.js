const Router = require('koa-router');
const userRouter = require('./user');

const v1Router = new Router({
  prefix: '/v1',
});

v1Router.use(userRouter.routes(), userRouter.allowedMethods());

module.exports = v1Router;
