let http = require("http");

let server = http.createServer(function (req, res) {

    console.log("URL:", req.url);
    console.log("Method:", req.method);

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to ABC College!");
    }

    else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About ABC College</h1>");
    }

    else {
        res.writeHead(404, "Not Found", { "Content-Type": "text/plain" });
        res.end("Page not found");
    }
});

server.listen(8080, function () {
    console.log("Server running on port 8080");
});