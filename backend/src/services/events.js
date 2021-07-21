// Services / Middle layer
// Mostrar os eventos [X]
// Criar os eventos
// Apagar os eventos
// Confirmação para apagar os eventos
// Mostrar um evento específico

const{
    findEvents,
    insertEvent
} = require('../data/events');


async function displayEvents(){
    return await findEvents({},{projection: {}})
}

async function createEvent(event){
    return await insertEvent(event)
}

module.exports = {
    displayEvents,
    createEvent}