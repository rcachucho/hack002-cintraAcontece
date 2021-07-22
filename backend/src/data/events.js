const { getCollection } = require('./db')
const { ObjectId } = require('mongodb')


async function findEvents(query, options) {
    const collection = await getCollection("CintraAcontece", "Events")
    const events = await collection.find(query, options).toArray();
    return events
}

async function insertEvent(event) {
    const collection = await getCollection("CintraAcontece", "Events");
    const res = await collection.insertOne(event)
    return res.insertedId
}

async function findEventById(id) {
    const collection = await getCollection("CintraAcontece", "Events");
    const res = await collection.findOne({ _id: ObjectId(id) })
    return res
}

async function findEventsByTag(eventTag) {
    console.log(eventTag)
    const collection = await getCollection("CintraAcontece", "Events");
    const res = await collection.find({tag: eventTag}).toArray();
    return res
}

module.exports = {
    findEvents,
    insertEvent,
    findEventById,
    findEventsByTag
}
// Usar {} quando forem vários module exports