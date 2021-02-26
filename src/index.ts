import express from 'express'
import routes from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    app.use(cors())
    next()
})
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(routes)

app.listen(3333)