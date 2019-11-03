const { toFailRes } = require('../../utils/formatRes');
const { JSON_SCHEMA_CODE } = require('../../constants/validate');

/**
 * 参数校验中间件
 * @param {Function} validateFn
 * @param {Function|String} validatePayload
 * @returns {Function}
 */
const validMiddleWare = ({ validateFn, validatePayload }) => {
  if (!validateFn || typeof validateFn !== 'function') throw new Error('Expected function validateFn');
  const middleware = async function validate(ctx, next) {
    let payload;
    if (typeof validatePayload === 'function') {
      payload = validatePayload(ctx);
    } else if (validatePayload === 'query') {
      payload = ctx.query;
    } else if (validatePayload === 'body') {
      payload = ctx.request.body;
    }
    const [error] = validateFn(payload);
    if (error) {
      const ctxBody = toFailRes(JSON_SCHEMA_CODE, error.message);
      // TODO: 日志记录
      ctx.throw(400, 'bad request validate error', { ctxBody });
    } else {
      await next();
    }
  };
  return middleware;
};

module.exports = validMiddleWare;
