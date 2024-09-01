const express = require("express")
const app = express()
const path = require("path")

const MongoDbCnct = require("./mongodbConnect")
const MongoDB = require("./mongoDbSchema")

app.use(express.json())
app.use(express.urlencoded())

// testing for redirection for Authentication through routes folder
const Authentication = require("./routes/Authentication")

const diffOps = require("./routes/diffOps")
const start = require("./routes/start")
//const Authentication = require("./controllers/Authentication") // this is for without going through routes folder, direct through controllers

// tetsing app.get for new routing through routes folder
app.get("/start",Authentication, start) // this works with journey through routes folder and controllers folder
app.get("/diffOps", diffOps)  // why this doesnt work
// rough work - this is github work in web

app.listen(4000,()=>{
    console.log("listening to port 4000")
})

