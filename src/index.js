import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import cors from 'cors'
import { corsOption } from './middleware/corsOption'
import { logger } from './middleware/logEvents'
import userRouter from './api/routes/user'
import loginRouter from './api/routes/login'
import noteRouter from './api/routes/note'
import { connection } from './db/config/connection'


dotenv.config()

const app = express()

// middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cookieParser())
app.use(helmet())
app.use(cors(corsOption))

// custom middleware logger
app.use(logger)

app.use('/api/users', userRouter)
app.use('/api/logins', loginRouter)
app.use('/api/notes', noteRouter)

// global error handler
app.use('*', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
})

const server = http.createServer(app)


server.listen(process.env.PORT, async () => {
    console.log(`Server up on http://localhost:${process.env.PORT}`)
    connection()
});