const Router = require('koa-router');
const { isExist, register } = require('../../controllers/v1/user');
const validMiddleWare = require('../../middlewares/validate/index');
const userValidate = require('../../validators/user');

const router = new Router({
  prefix: '/api/user',
});

const userValidateMiddleWare = validMiddleWare({
  validateFn: userValidate,
  validatePayload: 'body',
});

router.get('/isExist', async (ctx, next) => {
  const userName = ctx.query && ctx.query.userName;
  const result = await isExist(userName);
  ctx.body = result;
  await next();
});

router.post('/register', userValidateMiddleWare, async (ctx, next) => {
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
