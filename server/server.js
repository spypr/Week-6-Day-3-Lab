const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname))
})





app.listen(4000, console.log('Server running on 4000'))