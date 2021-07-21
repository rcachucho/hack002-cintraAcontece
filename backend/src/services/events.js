// Services / Middle layer
// Mostrar os eventos [X]
// Criar os eventos
// Apagar os eventos
// Confirmação para apagar os eventos
// Mostrar um evento específico

const{
    findEvents,
    findEventById,
    insertEvent
} = require('../data/events');


async function displayEvents(){
    return await findEvents({},{projection: {}})
}

async function displayEventById(id){
    return await findEventById(id)
}


async function createEvent(event){
    return await insertEvent(event)
}

module.exports = {
    displayEvents,
    displayEventById,
    createEvent}