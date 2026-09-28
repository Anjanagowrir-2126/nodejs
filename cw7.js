let http = require("http");
let fs = require("fs");
let EventEmitter = require("events");

let event = new EventEmitter();

event.on("pageViewed", function (page) {
    console.log(page + " page was viewed");
});

let server = http.createServer(function (req, res) {

    let fileName;

    if (req.url == "/home") {
        fileName = "home.html";
    }

    else if (req.url == "/services") {
        fileName = "services.html";
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Page not found");
        return;
    }

    fs.readFile(fileName, "utf8", function (err, data) {

        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Page not found");
            return;
        }

        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);

        event.emit("pageViewed", fileName);
    });
});

server.listen(3000, function () {
    console.log("Server running on port 3000");
});