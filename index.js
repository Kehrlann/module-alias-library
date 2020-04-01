require("module-alias/register");
console.log("Hello !");
console.log("");

console.log("---");
console.log("Using module-alias from end-user code ...");
const userModule = require("@deep/module");
console.log(userModule.message);
console.log("");

console.log("---");
console.log("Using module-alias from library ...");
console.log(require("module-alias-nested-library"));

console.log("---");
console.log("Showing off 'wildcard' modules...");
require("@wildcard/one");
require("@wildcard/two");
require("@wildcard/three");
