let { MongoClient } = require("mongodb");

let url = "mongodb://localhost:27017";

let client = new MongoClient(url);

async function main() {
    await client.connect();

    let db = client.db("workshop");
    let registrations = db.collection("registrations");

    let sampleRegistrations = [
        { name: "John", city: "Trivandrum" },
        { name: "Deepak", city: "Kollam" },
        { name: "Dean", city: "Trivandrum" },
        { name: "Rahul", city: "Calicut" },
        { name: "Ashwin", city: "Calicut" },
        { name: "Rolly", city: "Alleppy" },
        { name: "Nikhil", city: "Kottayam" },
        { name: "Raymond", city: "Trivandrum" },
        { name: "Dean", city: "Calicut" }
    ];

    await registrations.insertMany(sampleRegistrations);

    await registrations.updateOne(
        { name: "John" },
        { $set: { name: "Johnny", city: "Chennai" } }
    );

    await registrations.updateMany(
        { name: "Dean" },
        { $set: { city: "Kollam" } }
    );

    await registrations.deleteOne(
        { name: "Deepak" }
    );

    await registrations.deleteMany(
        { name: /^D/ }
    );

    console.log(await registrations.find().toArray());

    await client.close();
}

main();