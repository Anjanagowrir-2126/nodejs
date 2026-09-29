const readline = require("readline");

class Calculator {

    addition(a, b) {
        return a + b;
    }
    subtraction(a, b) {
        return a - b;
    }
    multiplication(a, b) {
        return a * b;
    }
    division(a, b) {
        return a / b;
    }
}
const calculator = new Calculator();
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("1. Addition");
console.log("2. Subtraction");
console.log("3. Multiplication");
console.log("4. Division");

rl.question("Enter your choice: ", function(choice) {

rl.question("Enter first number: ", function(a) {

    rl.question("Enter second number: ", function(b) {

        a = Number(a);
        b = Number(b);

        if (choice == 1) {
                console.log("Result: " + calculator.addition(a, b));
            }
            else if (choice == 2) {
                console.log("Result: " + calculator.subtraction(a, b));
            }
            else if (choice == 3) {
                console.log("Result: " + calculator.multiplication(a, b));
            }
            else if (choice == 4) {
                console.log("Result: " + calculator.division(a, b));
            }
            else {
                console.log("Invalid choice");
            }


        // console.log("Addition: " + calculator.addition(a, b));
        // console.log("Subtraction: " + calculator.subtraction(a, b));
        // console.log("Multiplication: " + calculator.multiplication(a, b));
        // console.log("Division: " + calculator.division(a, b));

        rl.close();
    });
 });

});