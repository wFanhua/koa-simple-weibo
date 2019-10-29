const Router = require('koa-router');
const { isExist } = require('../../controller/v1/user');

const router = new Router({
  prefix: '/api/user',
});

router.get('/isExist', isExist);

module.exports = router;
