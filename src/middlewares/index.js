const onerror = require('./onerror');
const formatRes = require('./formatRes');
const bodyParser = require('./bodyparse');
const cors = require('./cors');
const jwt = require('./jwt');

module.exports = (app) => {
  onerror(app);
  formatRes(app);
  cors(app);
  jwt(app);
  bodyParser(app);
};
