import express from 'express'
import routes from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(routes)

app.listen(3333)