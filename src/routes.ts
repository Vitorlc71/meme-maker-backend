import { Router } from 'express'
import axios from 'axios'
import qs from 'qs'
import env from 'dotenv'

env.config()

const routes = Router()

routes.get('/', async (req, res) => {
    try {

        const resp = await axios.get('https://api.imgflip.com/get_memes')
        res.send(resp.data.data.memes)

    } catch (error) {
        console.log(error)
    }
})

routes.post('/getmeme', async (req, res) => {

    try {
        const { template_id, username, password, boxes } = req.body

        const meme = await qs.stringify({
            template_id: template_id,
            username: username,
            password: password,
            boxes: boxes
        })

        const resp = await axios.post(`https://api.imgflip.com/caption_image?${meme}`)
        const { data } = resp
        res.send(data)

    } catch (error) {
        console.log(error)
    }
})

export default routes