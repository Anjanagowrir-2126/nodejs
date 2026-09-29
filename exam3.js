const { MongoClient } = require("mongodb");
const readline = require("readline");

const url = "mongodb://localhost:27017/";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

MongoClient.connect(url)
.then(client => {

    const db = client.db("class");

    const students = [
        { id: 1, name: "Rajesh" },
        { id: 2, name: "Rahul" },
        { id: 3, name: "Sruthi" }
    ];

    db.collection("students").insertMany(students)
    .then(() => {

        rl.question("Enter student ID: ", function(id) {
            id = Number(id);
            db.collection("students").findOne({ id: id })
            .then(student => {
                if (student) {
                    console.log("Student Name: " + student.name);
                } else {
                    console.log("Student not found");
                }

         rl.close();
        client.close();
            });
        });
 });
})
.catch(err => {
    console.log(err);
});