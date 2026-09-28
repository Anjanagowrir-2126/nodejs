let { MongoClient } = require("mongodb");

let client = new MongoClient("mongodb://localhost:27017");

async function main() {
    await client.connect();

    let db = client.db("library");
    let books = db.collection("books");

    let bookData = [
        { title: "Java Basics", author: "John", location: "Shelf A" },
        { title: "Node.js Guide", author: "Dean", location: "Shelf B" },
        { title: "Python 101", author: "Deepak", location: "Shelf D" },
        { title: "C++ Mastery", author: "Dean", location: "Shelf C" },
        { title: "Data Structures", author: "Ravi", location: "Shelf B" },
        { title: "React Handbook", author: "Derek", location: "Shelf D" }
    ];

    await books.insertMany(bookData);

    await books.updateOne(
        { title: "Java Basics" },
        { $set: { location: "Shelf Z" } }
    );

    await books.updateMany(
        { author: "Dean" },
        { $set: { location: "Shelf E" } }
    );

    await books.deleteOne(
        { title: "Python 101" }
    );

    await books.deleteMany(
        { title: /^D/ }
    );

    console.log(await books.find().toArray());

    await client.close();
}

main();