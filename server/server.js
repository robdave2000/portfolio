require('dotenv').config
const express = require('express')
const path = require('path')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'))
})
app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.css'))
})
app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.js'))
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})