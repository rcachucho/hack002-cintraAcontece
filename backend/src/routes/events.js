const express = require("express")
const { displayEvents, createEvent, displayEventById } = require('../services/events')
const eventsRouter = express.Router()
const isFuture = require('date-fns/isFuture')


function orderEventsByDate(events) {
    if (events !== undefined) {
        const eventsToSend = events.filter((e) => isFuture(new Date(e.edate)))
        return eventsToSend.sort(function (a, b) {
            return new Date(a.edate) - new Date(b.edate);
        })
    }
}


// GET /events - Fetch from the frontend asks for the objectives to display them 
eventsRouter.get("/", async (req, res) => {
    const events = await displayEvents();
    console.log(events)
    try {
        res.status(200).json({
            events: orderEventsByDate(events)
        })
    } catch (err) {
        console.log(err)
    }
})


// GET events/random - Fetch from frontend requests a random EventId
eventsRouter.get("/random", async (req, res) => {
    const events = await displayEvents()
    const eventsNumber = events.length

    const randomEventNumber = Math.floor(Math.random() * eventsNumber)
    const randomEvent = events[randomEventNumber]
    if (randomEvent) {
        const eventId = randomEvent._id
        res.status(200).json({
            eventId
        })

    }
})

// POST /events - Receives an event (json object{}) and returns the event id to use in the frontend
eventsRouter.post("/", async (req, res) => {
    const eventId = await createEvent(req.body)
    res.status(201).json({
        title: req.body.title,
        date: req.body.edate,
        location: req.body.location,
        author: req.body.author,
        time: req.body.etime,
        price: req.body.price,
        tag: req.body.tag,
        info: req.body.info,
        site: req.body.site,
        id: eventId
    })
})


// GET /events/:id - Receives a request from the frontend to display a specific event
eventsRouter.post("/:id", async (req, res) => {
    console.log(req.body)
    const eventObj = await displayEventById(req.body.eventId);
    res.status(200).json(eventObj)
})


module.exports = eventsRouter