const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const locationRoutes = require('./routes/location')
const keys = require('./config/keys')
const app = express()

mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useCreateIndex', true)
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected.'))
  .catch(e => console.log(e))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)
app.use('/api/location', locationRoutes)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(__dirname + '/public/'))
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}

module.exports = app