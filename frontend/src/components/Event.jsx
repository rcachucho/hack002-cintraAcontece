import React, { useEffect, useState } from 'react'

function Event() {
    const [events, setEvents] = useState([])
    const [eventDisplay, setEventDisplay] = useState({})
    const [userClick, setUserClick] = useState(false)

    useEffect(() => {
        fetchEvents()
        changeEvent()
        fetchRandomEvent()
    }, [])

    function changeEvent() {
        if (!userClick) {
            setInterval(() => {
                fetchRandomEvent()
            }, 7500)
        }
    }

    function handleClick(id) {
        fetchEventById(id);
        setUserClick(true);
        
    }

    async function fetchEventById(eventId) {
        const res = await fetch(`/events/${eventId}`, {
            method: "POST",
            body: JSON.stringify({ eventId }),
            headers: { "Content-Type": "application/json" },
        })
        const resBody = await res.json();
        if (res.status === 200) {
            setEventDisplay(resBody)
        } else {
            console.log("Error objective by id")
        }
    }

    async function fetchRandomEvent() {
        const res = await fetch("/events/random")
        const resBody = await res.json();
        if (res.status === 200) {
            fetchEventById(resBody.eventId)
        }
    }


    async function fetchEvents() {
        const res = await fetch("/events")
        const resBody = await res.json()
        if (res.status === 200) {
            // console.log(resBody.events)
            setEvents(resBody.events)
        } else {
            console.log("erro no fetch do evento")
        }
    }

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
                            <button onClick={() => handleClick(event._id)}>+Info</button>
                        </ul>
                    </div>
                ))

            }


            <div>
                <h1>Event</h1>
                <p>Título: {eventDisplay.title}</p>
            </div>

        </section>

    )
}

export default Event