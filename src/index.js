import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import { corsOption } from './middleware/corsOption'
import { logger } from './middleware/logEvents'

dotenv.config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(helmet())
app.use(cors(corsOption))

// custom middleware logger
app.use(logger)

// global error handler
app.use('*', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
})

app.listen(process.env.PORT, () => {
    console.log(`Server starts at http://localhost:${process.env.PORT}`)
})