import React, { useEffect, useState } from 'react'

function Event() {
    const [events, setEvents] = useState([])
    const [eventDisplay, setEventDisplay] = useState({})
    const [userClick, setUserClick] = useState(false)
    const [iid, setIid] = useState(false)

    // As the page loads, loads the event, changes a random event time-based and gets from BE a random event
    useEffect(() => {
        fetchEvents()
    }, [])

    // It sets an interval in wich the randomEvent displayed at the bottom of the page will change. When the user clicks, it stops
    function changeEventOnTime() {
        setIid(setInterval(() => {
            if (!userClick) {
                fetchRandomEvent()
            }
        }, 7500))
    }

    // As the user  clicks on an event, it changes the event displayed at the bottom to that specific event. It also stops the changeEventOnTime
    const handleClick = (id) => {
        fetchEventById(id);
        clearInterval(iid)
        setUserClick(true);
    }

    // POST - It sends the eventId to show that specific event
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

    // It gets a random event 
    async function fetchRandomEvent() {
        const res = await fetch("/events/random")
        const resBody = await res.json();
        if (res.status === 200 && !userClick) {
            fetchEventById(resBody.eventId)
        }
    }

    // Loads all the events, already sorted by date
    async function fetchEvents() {
        const res = await fetch("/events")
        const resBody = await res.json()
        if (res.status === 200) {
            // console.log(resBody.events)
            setEvents(resBody.events)
            changeEventOnTime();
            fetchRandomEvent();
        } else {
            return false
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
                            <li>{event.price}</li>
                            <li>{event.tag}</li>
                            <li> <a href={event.site}> {event.site} </a></li>
                            <button onClick={() => handleClick(event._id)}>+Info</button>
                        </ul>
                    </div>
                ))
            }

            <div>
                <h1>Event</h1>
                <p>Título: {eventDisplay.title}</p>
                <p>Descrição: {eventDisplay.info}</p>
            </div>
        </section>
    )
}

export default Event