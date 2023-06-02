const EventEmmiter = require("events");
const emitter = new EventEmmiter();
const Logger = require('./logger.js');
const logger = new Logger();


logger.log('Here is the message');