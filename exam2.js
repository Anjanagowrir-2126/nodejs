const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter Number : ", function(n) {
    for (let i = 1; i <=10;i++){
        
        let table = n*i;
    console.log(n + "x" + i + "=" + (table));
    }
rl.close();
})