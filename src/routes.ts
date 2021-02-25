import { Router } from 'express'
import axios from 'axios'
import qs from 'qs'
import env from 'dotenv'
import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())

env.config()

const routes = Router()

routes.get('/', async (req, res) => {
    try {

        axios.get('https://api.imgflip.com/get_memes')
        .then(resp => res.send(resp.data.data.memes))

    } catch (error) {
        console.log(error)
    }
})

routes.post('/getmemes', async (req, res) => {

    const { template_id, boxes } = req.body

    const meme = qs.stringify({
        template_id: template_id,
        username: process.env.USER,
        password: process.env.PASSWORD,
        boxes: boxes
    })

    try {
        const resp = await axios.post(`https://api.imgflip.com/caption_image?${meme}`)
        const { data } = resp
        res.send(data)

    } catch (error) {
        console.log(error)
    }
})

export default routes