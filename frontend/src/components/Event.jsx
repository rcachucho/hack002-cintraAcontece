import React, { useEffect, useState } from 'react'

function Event() {
    const [events, setEvents] = useState([
        { date: "12/07/2010", title: "Shakespeare" }, { date: "20/02/2020", title: "Music" }
    ])

    // async function fetchEvents() {
    //     const res = await fetch("/events", {
    //         method: "GET"
    //     })
    //     if (res.status === 200) {
    //         setEvents({res})
    //     } else {
    //         console.log("erro no fetch do evento")
    //     }
    // }


        // async function fetchEventsById(eventId) {
    //     const res = await fetch("/events", {
        //     method: "POST"
            // body: JSON.stringify({ eventId }),
            // headers: { "Content-Type": "application/json" },
    //     })
    //     if (res.status === 200) {
    //         setEvents({res})
    //     } else {
    //         console.log("erro no fetch do evento")
    //     }
    // }

// #################        isto vai para o back end        #################    

    // async function fetchEventsById(eventId) {
    //  const collection = await getCollection("usuarios", "usuarios")
    //    const eventInfo = await collection.findOne({ _id: ObjectId(eventId) })
    //    return eventInfo
    // }


    return (
        <section className={events}>
            {
                events.map((event, index) => (
                    <div>
                        <ul>
                            <li>{event.date}</li>
                            <li>{event.title}</li>
                            {/* <li>{event.location}</li>
                   <li>{event.time}</li>
                   <li>{event.price}</li>
                   <li>{event.category}</li> */}
                        </ul>
                    </div>
                ))

            }

            <div>
                <h1>Event</h1>

            </div>


        </section>

    )
}

export default Event












