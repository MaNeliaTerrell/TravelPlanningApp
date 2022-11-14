const express = require('express')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')
require('dotenv').config()
// Connecting to database
require ('./config/database')
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3001;

// Plans
const plan = require('./routes/api/plan')

// Middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
// app.use(express.static(path.join(__dirname, 'build')))

// Middleware to verify token and assign user object of payload to req.user.
// Be sure to mount before routes
app.use(require('./config/checkToken'));


//  Routes
app.use('/api/users', require('./routes/api/users'))

// API Routes
// app.get('/orders',(req, res) => {
// })
// app.get('/orders/new',(req, res) => {
// })

// Routes for the Saved Itinerary
app.use('/api/plan', require('./routes/api/plan'))
app.use('/api/plan', plan)


// Catch All to serve the production app
app.get('/*', (req, res) => {
    res.send(path.join(__dirname, 'build', 'index.html'))
})

app.listen(PORT, () =>{
    console.log(`Server running on port: ${PORT}`);
})

