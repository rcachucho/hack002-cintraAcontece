import React, { useEffect, useState } from 'react'
import "../styles/Event.css"

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

    async function fetchEventsByTag(eventTag) {
        console.log(eventTag)
        const res = await fetch("/events/tag", {
            method: "POST",
            body: JSON.stringify({ tag: eventTag }),
            headers: { "Content-Type": "application/json" },
        })
        const resBody = await res.json();
        if (res.status === 200) {
            setEvents(resBody.eventsByTag)
        } else if (res.status === 404) {
            fetchEvents()
            alert("Não foram encontrados resultados, por favor tente outra categoria.")
        }
    }

    function handleSubmit(e) {
        fetchEventsByTag(e.target.value)
    }

    return (
        <section className={events}>
            <form>
                <select onChange={(e) => handleSubmit(e)} name="tag" id="tag">
                    <option value=""> - - - Encontrar por categoria - - -</option>
                    <option value="cinema">Cinema</option>
                    <option value="dança">Dança</option>
                    <option value="exposição">Exposição</option>
                    <option value="música">Música</option>
                    <option value="teatro">Teatro</option>
                </select>
            </form>
            {
                events.map((event) => (
                    <div key={event._id}>
                        <ul className="eventlist">
                            <li className="valueslisttitle">{event.title}</li>
                            <li className="valueslist">{event.edate}</li>
                            <li className="valueslist">{event.location}</li>
                            <li className="valueslist">{event.price}€</li>
                            <li className="valueslist">{event.tag}</li>
                            <li className="valueslist">{event.site}</li>
                            <a href="#pageend"><button className="infobutton" onClick={() => handleClick(event._id)}>+Info</button></a>
                        </ul>
                    </div>
                ))
            }


            <div id="pageend">
                <h1 className="eventshowinfo">{eventDisplay.title}</h1>
                <p  className="eventshowinfop">Descrição: {eventDisplay.info}</p>

            </div>
        </section>
    )
}

export default Event