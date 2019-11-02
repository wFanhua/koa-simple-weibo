const onerror = require('./onerror');
const bodyParser = require('./bodyparse');
const cors = require('./cors');
const jwt = require('./jwt');

module.exports = (app) => {
  onerror(app);
  cors(app);
  jwt(app);
  bodyParser(app);
};
