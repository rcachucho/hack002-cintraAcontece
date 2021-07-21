const mongodb = require("mongodb")
const {getCollection} = require('./db')
const ObjectId = require('mongodb')


async function findEvents(query, options){
    const collection = await getCollection("CintraAcontece", "Eventos")
    const events = await collection.find(query, options).toArray();
    return events
}

module.exports = {findEvents}
// Usar {} quando forem vários module exports