const express = require('express')
const app = express()
const homePage = require('./Data/homeData.json')
var cors = require('cors')
const port = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
  res.send('SavoryFy server')
})

app.get('/homePage', (req, res) => {
  res.send(homePage)
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})