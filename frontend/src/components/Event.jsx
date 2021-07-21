import React, { useEffect, useState } from 'react'

function Event() {
    const [events, setEvents] = useState([
        { data: "12/07/2010", titulo: "Shakespeare" }, { data: "20/02/2020", titulo: "Musica" }
    ])

    function consoleLog() {
        console.log(events)
    }

    return (
        <div>
            <h1>Event</h1>
            <button onClick={() => consoleLog()}> ConsoleLog</button>
        </div>
    )
}

export default Event