module.exports = (err, ctx) => {
  ctx.body = { error: err.message || '请求错误' };
};
