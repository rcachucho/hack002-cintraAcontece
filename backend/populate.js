const fs = require('fs/promises')
const { insertEvent } = require('./src/data/events')

async function pouplate() {
    const events = await fs.readFile('./events.json')
    const json = JSON.parse(events.toString())
    console.log(json.events)
    for (const event of json.events) {
        insertEvent(event)
    }
}

pouplate().then(() => console.log("Populated ran"))