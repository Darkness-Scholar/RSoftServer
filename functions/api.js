import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import serverless from 'serverless-http'

const app = express()
// RSoft Server

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

module.exports.handler = serverless(app)