require('dotenv').config();
const Koa = require('koa');
const registerRoutes = require('./routes');
const registerMiddleWares = require('./middlewares');

const app = new Koa();

registerMiddleWares(app);
registerRoutes(app);

app.listen(process.env.SERVER_PORT || 8000);
