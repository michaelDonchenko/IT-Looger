//express & DB
const express = require('express')
const app = express()
const connectDB = require('./config/db')
const path = require('path')

const dotenv = require('dotenv');
dotenv.config()

//init middleware
app.use(express.json({extended: false}))

//require routes
const techRoutes = require('./routes/techRoutes')
const logRoutes = require('./routes/logRoutes')

//Define routes
app.use('/', techRoutes)
app.use('/', logRoutes)

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
  //set static folder
  app.use(express.static('client/build'))

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
}

//Port
const PORT = process.env.PORT || 5000
//DB connection
connectDB()


//port listener
app.listen(PORT, () => {
  console.log(`The app listening at http://localhost:${PORT}`)
})