//require("dotenv").config();

const express = require("express")
const app = express()
const cors = require("cors")
const pool = require("./db.js")

//const { Pool } = require("pg");

//middleware
app.use(cors())
app.use(express.json())

const labelRoutes = require("./api/labels")

app.use("/labels", labelRoutes)
  

// En grundläggande route
app.get("/", (req, res) => {
    res.send("Välkommen till API:et!");
 });

app.listen(5000, ()=> {
    console.log("Server has started on port 5000")
}) 