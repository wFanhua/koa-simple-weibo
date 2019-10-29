module.exports = (app) => {
  Object.defineProperty(app.context, 'success', {
    value(res) {
      return {
        errno: 0,
        data: res,
      };
    },
  });

  Object.defineProperty(app.context, 'fail', {
    value(errno, message) {
      return {
        errno,
        message,
      };
    },
  });
};
