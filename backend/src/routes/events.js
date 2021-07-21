const express = require("express")
const {displayEvents} = require('../services/events')
const eventsRouter = express.Router()

eventsRouter.get("/", async(req, res) => {
    try{
        res.status(200).json({
            events: await displayEvents()
        })
    }catch(err){
        console.log(err)
    }
})

eventsRouter.get("/:id", async (req, res) => {
    res.status(200).json("Objetivo por id")
})


module.exports = eventsRouter