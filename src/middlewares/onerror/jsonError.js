module.exports = (err, ctx) => {
  const { errorRes } = err;
  if (errorRes) {
    ctx.body = errorRes;
  } else {
    ctx.body = { errno: -1, message: err.message };
  }
};
