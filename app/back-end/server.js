require("dotenv").config()

const express = require("express")
const cors = require("cors")
const pool = require("./db.js")

const app = express()
const PORT = process.env.PORT || 4343

//middleware
app.use(cors())
app.use(express.json())

const labelRoutes = require("./api/labels")

app.use("/labels", labelRoutes)
  

// En grundläggande route
app.get("/", (req, res) => {
    res.send("Välkommen till API:et!");
 })

app.listen(PORT, () => {
  console.log(`Server is running: http://localhost:${PORT}`)
})