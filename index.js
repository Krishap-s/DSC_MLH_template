const express = require('express')
const cors = require('cors')
var port = process.env.PORT || 3000

var corsConfig = {
    origin:'*'
}

var app = express()

//cors because api
app.use(cors(corsConfig))

app.listen(port,() => {
    console.log(`Server listening on ${port}`)
})