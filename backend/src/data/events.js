const mongodb = require("mongodb")
const {getCollection} = require('./db')
const ObjectId = require('mongodb')


async function findEvents(query, options){
    const collection = await getCollection("CintraAcontece", "Events")
    const events = await collection.find(query, options).toArray();
    return events
}

async function insertEvent(event){
    const collection = await getCollection("CintraAcontece", "Events");
    const res = await collection.insertOne(event)
    return res.insertedId
}

module.exports = {
    findEvents,
    insertEvent
}
// Usar {} quando forem vários module exports