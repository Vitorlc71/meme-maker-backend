import express from 'express'
import routes from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors({
    origin: '*'
}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(routes)

app.listen(3333)