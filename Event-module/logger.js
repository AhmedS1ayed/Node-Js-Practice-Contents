const EventEmmiter = require("events");

class Logger extends EventEmmiter {
  constructor() {
    super();
    this.on("messageLogged", (obj) => {
      console.log(`id : ${obj.id} \nurl : ${obj.url}`);
    });
  }
  log(message) {
    console.log(message);
    this.emit("messageLogged", { id: 1, url: "https://" });
  }
}

module.exports = Logger;
