// Services / Middle layer
// Mostrar os eventos [X]
// Criar os eventos
// Apagar os eventos
// Confirmação para apagar os eventos
// Mostrar um evento específico

const{
    findEvents,
    findEventById,
    insertEvent,
    findEventsByTag
} = require('../data/events');


async function displayEvents(){
    return await findEvents({},{projection: {}});
}

async function displayEventById(id){
    return await findEventById(id);
}


async function createEvent(event){
    return await insertEvent(event);
}

async function displayEventsByTag(tag){
    console.log(tag)
    return await findEventsByTag(tag);
}

module.exports = {
    displayEvents,
    displayEventById,
    displayEventsByTag,
    createEvent}