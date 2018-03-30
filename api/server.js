require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000
const resources = require('./routes/resources')
const tasks = require('./routes/tasks')

app.use(bodyParser.json())
app.use(cors({ credentials: true }))

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Chavela API')
})

//resources(app)
tasks(app)

app.listen(PORT, () => console.log('API UP!! on ', PORT))
