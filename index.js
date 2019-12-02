require("module-alias/register");
console.log("Hello !");
console.log("---");
const userModule = require("@deep/module");
console.log(userModule.message);
