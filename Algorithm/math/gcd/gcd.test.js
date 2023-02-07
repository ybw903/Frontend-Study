const assert = require("assert");
const gcd = require("./gcd.js");

try {
  assert(gcd(2, 16) === 2);
  console.log("test success");
} catch (err) {
  console.error(err);
}
