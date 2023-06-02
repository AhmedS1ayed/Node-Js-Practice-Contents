const logger = require("./logger.js");
const path = require("path");
const os = require("os");
const fs = require("fs");

logger.log("hello");
logger.log(logger.endPoint);

pathObj = path.parse(__filename);
console.log(pathObj);

totalMem = os.totalmem();
freeMem = os.freemem();

console.log(`Total memory : ${totalMem}`);
console.log(`Free memory : ${freeMem}`);

// // read using sync
// fileRead = fs.readFileSync('test.txt');
// console.log(fileRead.toString());


// // read using callback function
// fileRead = await fs.readFile("test.txt", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data.toString());

//   console.log(this);
// });


// // read using async
// const read = async (file) => {
//   const f = await fs.readFile(file, (err, data) => {
//     if (!err) console.log(data.toString());
//   });
// };

// read("test.txt");