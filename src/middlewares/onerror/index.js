const onerror = require('koa-onerror');
const jsonError = require('./jsonError');
const textError = require('./textError');

module.exports = (app) => {
  onerror(app, {
    json: jsonError,
    text: textError,
  });
};
