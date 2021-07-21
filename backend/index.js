const express = require("express")

const PORT = 3001;
const app = express()

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).json({message: "A funcionar"})
})

app.listen(PORT, () => console.log(`À escuta em ${PORT}`))