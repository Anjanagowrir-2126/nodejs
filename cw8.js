let http = require("http");
let formidable = require("formidable");
let fs = require("fs");
let nodemailer = require("nodemailer");

let server = http.createServer(function (req, res) {

    if (req.url == "/upload" && req.method == "POST") {

        let form = new formidable.IncomingForm();

        form.parse(req, function (err, fields, files) {

            if (err) {
                res.write("File upload failed");
                res.end();
                return;
            }

            let oldPath = files.file[0].filepath;
            let newPath = "uploads/" + files.file[0].originalFilename;

            fs.rename(oldPath, newPath, function (err) {

                if (err) {
                    res.write("File could not be saved");
                    res.end();
                    return;
                }

                let transporter = nodemailer.createTransport({
                    service: "gmail",
                    auth: {
                        user: "yourmail@gmail.com",
                        pass: "your-app-password"
                    }
                });

                let mailOptions = {
                    from: "yourmail@gmail.com",
                    to: "friend@gmail.com",
                    subject: "File Uploaded",
                    text: "A file has been successfully uploaded."
                };

                transporter.sendMail(mailOptions, function (err, info) {

                    if (err) {
                        res.write("File uploaded, but email could not be sent.");
                        res.end();
                        return;
                    }

                    res.write("File uploaded and email sent successfully!");
                    res.end();
                });
            });
        });

    } else {

        res.writeHead(200, { "Content-Type": "text/html" });

        res.end(`
            <form action="/upload" method="POST" enctype="multipart/form-data">
                <input type="file" name="file">
                <button type="submit">Upload</button>
            </form>
        `);
    }
});

server.listen(3000, function () {
    console.log("Server running on port 3000");
});