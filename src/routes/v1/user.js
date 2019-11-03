const Router = require('koa-router');
const {
  isExist,
  register,
  login,
  info,
} = require('../../controllers/v1/user');
const validMiddleWare = require('../../middlewares/validate/index');
const userValidate = require('../../validators/user');

const router = new Router({
  prefix: '/api/user',
});

const userValidateMiddleWare = validMiddleWare({
  validateFn: userValidate,
  validatePayload: 'body',
});

// 判断用户名是否存在
router.get('/isExist', async (ctx, next) => {
  const userName = ctx.query && ctx.query.userName;
  const result = await isExist(userName);
  ctx.body = result;
  await next();
});

// 注册
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


// 登录
router.post('/login', async (ctx, next) => {
  const {
    userName,
    password,
  } = ctx.request && ctx.request.body;
  const result = await login({ userName, password });
  ctx.body = result;
  await next();
});

router.get('/info', async (ctx, next) => {
  const userId = ctx.state.user && ctx.state.user.userId;
  const result = await info(userId);
  ctx.body = result;
  await next();
});

module.exports = router;
