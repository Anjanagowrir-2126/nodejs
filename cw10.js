let fs = require("fs");

fs.writeFile("book.txt", "Books are a uniquely portable magic.", function (err) {
    if (err) {
        console.log("Error while writing the file");
        return;
    }

    console.log("Writing completed");

    fs.readFile("book.txt", "utf8", function (err, data) {
        if (err) {
            console.log("Error while reading the file");
            return;
        }

        console.log("Book content:", data);
        console.log("Reading completed");
    });
});