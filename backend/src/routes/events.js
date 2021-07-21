const express = require("express")
const {displayEvents, createEvent, displayEventById} = require('../services/events')
const eventsRouter = express.Router()

// GET /events - Fetch from the frontend asks for the objectives to display them 
eventsRouter.get("/", async(req, res) => {
    try{
        res.status(200).json({
            events: await displayEvents()
        })
    }catch(err){
        console.log(err)
    }
})


// GET events/random - Fetch from frontend requests a random EventId
eventsRouter.get("/random", async (req, res) => { 
    const events = await displayEvents()
    const eventsNumber = events.length

    const randomEventNumber = Math.floor(Math.random() * eventsNumber) 
    const randomEvent = events[randomEventNumber]
    const eventId = randomEvent._id
    res.status(200).json({
        eventId
    })
})

// POST /events - Receives an event (json object{}) and returns the event id to use in the frontend
eventsRouter.post("/", async (req, res) => {
    console.log("A correr o post errado")
    const eventId = await createEvent(req.body)
    res.status(201).json({
        title: req.body.title,
        date: req.body.edate,
        location: req.body.location,
        time: req.body.etime,
        price:req.body.price,
        tag: req.body.tag,
        id: eventId})
})


// GET /events/:id - Receives a request from the frontend to display a specific event
eventsRouter.post("/:id", async (req, res) => {
    console.log(req.body)
    console.log("A correr o post certo")
    const eventObj = await displayEventById(req.body.eventId);
    res.status(200).json(eventObj)
})


module.exports = eventsRouter