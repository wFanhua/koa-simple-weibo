const { toFailRes } = require('../../utils/formatRes');

module.exports = (err, ctx) => {
  const { ctxBody } = err;
  if (ctxBody) {
    ctx.body = ctxBody;
  } else {
    ctx.body = toFailRes(-1, err.message);
  }
};
