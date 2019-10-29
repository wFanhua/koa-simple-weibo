module.exports = (err, ctx) => {
  ctx.body = err.message || '请求错误';
};
