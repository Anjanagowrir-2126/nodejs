let fs = require("fs");

let introStream = fs.createReadStream("intro.txt");
let conclusionStream = fs.createReadStream("conclusion.txt");

let introData = [];
let conclusionData = [];

introStream.on("data", function (chunk) {
    introData.push(chunk);
});

introStream.on("end", function () {
    conclusionStream.on("data", function (chunk) {
        conclusionData.push(chunk);
    });

    conclusionStream.on("end", function () {
        let introBuffer = Buffer.concat(introData);
        let conclusionBuffer = Buffer.concat(conclusionData);

        let fullReport = Buffer.concat([introBuffer, conclusionBuffer]);

        let outputStream = fs.createWriteStream("full_report.txt");

        outputStream.write(fullReport);

        outputStream.end(function () {
            console.log("Merging complete!");
        });
    });
});