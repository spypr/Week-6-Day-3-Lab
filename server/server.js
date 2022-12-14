const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req,res) => {
    console.log(__dirname)
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))
})

app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})

app.listen(4000, console.log("Server running on 4000."))