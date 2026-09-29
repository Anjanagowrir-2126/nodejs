const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter N: ", function(n) {
    for (let i = 1; i <= n; i++) {
        console.log("*".repeat(i));
    }

    rl.close();
});