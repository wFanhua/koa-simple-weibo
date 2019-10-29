const v1Router = require('./v1');
const v2Router = require('./v2');

module.exports = (app) => {
  app.use(v1Router.routes()).use(v1Router.allowedMethods());
  app.use(v2Router.routes()).use(v2Router.allowedMethods());
};
