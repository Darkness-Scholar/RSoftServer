import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import serverless from 'serverless-http'

import { audio } from '../routes/audio.js'
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

app.use("/audio", audio)
export const handler = serverless(app)

// app.listen(9999, () => {
//     console.log('Server started at http://localhost:9999')
// })