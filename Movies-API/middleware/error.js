const logger = require("../startup/logger");
function error(error, req, res, next) {
  logger.error(error.message, error);
  res.status(500).send("Something Failed.");
}

module.exports = error;
