let managerInfo = require("./manager");
let capitalizeName = require("./capital");

let name = capitalizeName(managerInfo.name);
let role = managerInfo.role.toUpperCase();

console.log("Manager Name:", name);
console.log("Manager Role:", role);
console.log("Role Length:", managerInfo.role.length);
console.log("Inventory Position:", managerInfo.role.search("inventory"));