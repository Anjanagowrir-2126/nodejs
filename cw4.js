let userInfo = require("./userInfo");
let formatName = require("./formatName");

let formattedName = formatName(userInfo.name);

console.log("Name:", formattedName);
console.log("Hobby:", userInfo.hobby.toUpperCase());
console.log("Hobby length:", userInfo.hobby.length);