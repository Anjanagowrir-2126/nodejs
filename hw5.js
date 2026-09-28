let http = require("http");

let server = http.createServer(function (req, res) {

    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Welcome to the Home Page!</h1>");
    }

    else if (req.url == "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>This is a simple Node.js server.</h1>");
    }

    else if (req.url == "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>Contact us at contact@example.com.</h1>");
    }

    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Page Not Found.");
    }
});

server.listen(3000, function () {
    console.log("Server running on port 3000");
});