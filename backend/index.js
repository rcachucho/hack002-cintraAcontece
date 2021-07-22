const express = require("express")
const app = express()
const PORT = 3201;
const eventsRouter = require('./src/routes/events')

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({message: "A funcionar"})
})

app.use("/events", eventsRouter)

app.listen(PORT, () => console.log(`À escuta em ${PORT}`))