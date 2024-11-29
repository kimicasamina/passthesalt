import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// global error handler
app.use('*', (err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
})