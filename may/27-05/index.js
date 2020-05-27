// module exports

const math = require("./math");
console.log(math);

let x = 5,
  y = 4;
console.log(`x + y = ${math.sum(x, y)}`);
console.log(`x + y = ${math.sub(x, y)}`);
console.log(`x + y = ${math.multi(x, y)}`);
