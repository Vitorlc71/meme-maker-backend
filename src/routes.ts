import { Router } from 'express'
import axios from 'axios'
import qs from 'qs'
import env from 'dotenv'

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

routes.post('/', async (req, res) => {

    const { template_id, username, password, boxes } = req.body

    const meme = qs.stringify({
        template_id: template_id,
        username: username,
        password: password,
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