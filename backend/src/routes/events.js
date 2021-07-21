const express = require("express")
const {displayEvents, createEvent} = require('../services/events')
const eventsRouter = express.Router()

// GET /evens - Fetch from the frontend asks for the objectives to display them 
eventsRouter.get("/", async(req, res) => {
    try{
        res.status(200).json({
            events: await displayEvents()
        })
    }catch(err){
        console.log(err)
    }
})

// POST /events - Receives an event (json object{}) and returns the event id to use in the frontend
eventsRouter.post("/", async (req, res) => {
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

// GET /events/:id - Receives a request from the frontend to display a specific objective 
eventsRouter.get("/:id", async (req, res) => {
    res.status(200).json("Objetivo por id")
})


module.exports = eventsRouter