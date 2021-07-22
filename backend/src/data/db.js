const { MongoClient } = require('mongodb')
const URI = 'mongodb://localhost:27017'

let client

async function connect(uri) {
    try {
        if (client) return client;
        client = new MongoClient(uri, {
            useUnifiedTopology: true
        })
        await client.connect();
        return client;
    } catch (err) {
        console.log(err)
    }
}

async function getCollection(dbName, collectionName) {
    const client = await connect(URI);
    const db = client.db(dbName);
    const collection = db.collection(collectionName);
    return collection;
}

module.exports = {
    getCollection
}