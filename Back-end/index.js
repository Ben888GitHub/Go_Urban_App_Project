const express = require("express")

const path = require("path")

const app = express()

const PORT = 5123

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`)
})