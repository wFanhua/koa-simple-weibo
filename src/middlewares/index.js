const onerror = require('./onerror');
const formatRes = require('./formatRes');
const bodyParser = require('./bodyparse');
const cors = require('./cors');

module.exports = (app) => {
  onerror(app);
  formatRes(app);
  cors(app);
  bodyParser(app);
};
