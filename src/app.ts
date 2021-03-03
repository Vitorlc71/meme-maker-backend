import express from 'express'
import routes from './routes'
import cors from 'cors'
import bodyParser from 'body-parser'

const PORT = process.env.PORT || 3333
const app = express()
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://maker-meme.herokuapp.com/")
    res.header("Access-Control-Allow-Origin", "http://localhost:3000")
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE")
    res.header("Access-Control-Allow-Headers","*")
    app.use(cors())
    next()
})
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(routes)

app.listen(PORT || 3333)