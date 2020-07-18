const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const configServer = require('./config/configServer.json')
const protocol = process.env.PROTOCOL || configServer.protocol;
const ip = require('ip').address()
const port = process.env.PORT || configServer.port;;

app.use(require('./routes'))

app.listen(port, () => console.log(`
    Server started in http://localhost:${port} or ${protocol}://${ip}:${port}
`))
