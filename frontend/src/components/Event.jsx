import React, { useEffect, useState } from 'react'

function Event() {
    const [events, setEvents] = useState([])


    useEffect(() => {
        fetchEvents()
    }, [])


    async function fetchEvents() {
        const res = await fetch("/events")
        const resBody = await res.json()
        if (res.status === 200) {
            console.log(resBody.events)
            setEvents(resBody.events)
        } else {
            console.log("erro no fetch do evento")
        }
    }


    // async function fetchEventsById(eventId) {
    //     const res = await fetch("/events", {
    //         method: "POST",
    //         body: JSON.stringify({ eventId }),
    //         headers: { "Content-Type": "application/json" },
    //     })
    //     if (res.status === 200) {
    //         setEvents({ res })
    //     } else {
    //         console.log("erro no fetch do evento")
    //     }
    // }



    return (
        <section className={events}>
            {
                events.map((event) => (
                    <div key={event._id}>
                        <ul>
                            <li>{event.title}</li>
                            <li>{event.edate}</li>
                            <li>{event.location}</li>
                            <li>{event.etime}</li>
                            <li>{event.price}</li>
                            <li>{event.tag}</li>                            
                        </ul>
                    </div>
                ))

            }


            <div>
                
                <button onClick={() => console.log(events)}>ConsoleLog</button>
                <h1>Event</h1>

            </div>

        </section>

    )
}

export default Event