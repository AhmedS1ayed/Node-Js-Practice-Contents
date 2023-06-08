const winston = require("winston");
function error(error, req, res, next) {
  const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({
        filename: "./logs/error.log",
        level: "error",
      }),
      new winston.transports.File({ filename: "./logs/combined.log" }),
    ],
  });

  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
  logger.error(error.message);
  res.status(500).send("Something Failed.");
}

module.exports = error;
