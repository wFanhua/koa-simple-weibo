const Router = require('koa-router');
const { isExist, register } = require('../../controllers/v1/user');

const router = new Router({
  prefix: '/api/user',
});

router.get('/isExist', async (ctx, next) => {
  const userName = ctx.query && ctx.query.userName;
  const result = await isExist(userName);
  ctx.body = result;
  await next();
});

router.post('/register', async (ctx, next) => {
  const {
    userName,
    password,
    gender,
  } = ctx.request && ctx.request.body;
  const result = await register({ userName, password, gender });
  ctx.body = result;
  await next();
});

module.exports = router;
