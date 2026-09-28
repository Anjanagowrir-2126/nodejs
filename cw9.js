let buffer1 = Buffer.from("NodeJS is fast");

let nodeBuffer = buffer1.slice(0, 6);

console.log(nodeBuffer.toString());

let powerfulBuffer = Buffer.from("Powerful");

let result = Buffer.compare(nodeBuffer, powerfulBuffer);

if (result < 0) {
    console.log("NodeJS comes first alphabetically");
} else if (result > 0) {
    console.log("Powerful comes first alphabetically");
} else {
    console.log("Both are equal");
}

console.log(nodeBuffer.toJSON());