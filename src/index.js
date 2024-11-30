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
import userRouter from './api/v1/routes/user'
import loginRouter from './api/v1/routes/login'
import noteRouter from './api/v1/routes/note'
import authRouter from './api/v1/routes/auth'
import { connection } from './db/config/connection'
import { encrypt, decrypt } from './middleware/encryptionHandler'

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

app.use('/api/v1/users', userRouter)
app.use('/api/v1/logins', loginRouter)
app.use('/api/v1/notes', noteRouter)
app.use('/api/v1/auth', authRouter)

// global error handler
app.use('*', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
})

const server = http.createServer(app)

server.listen(process.env.PORT, async () => {
    console.log(`Server up on http://localhost:${process.env.PORT}`)
    connection()
})
