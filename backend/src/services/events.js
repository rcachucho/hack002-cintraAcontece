// Services / Middle layer
// Mostrar os eventos [X]
// Criar os eventos
// Apagar os eventos
// Confirmação para apagar os eventos
// Mostrar um evento específico

const{
    findEvents
} = require('../data/events');


async function displayEvents(){
    return await findEvents({},{projection: {_id: 0}})
}

module.exports = {
    displayEvents}