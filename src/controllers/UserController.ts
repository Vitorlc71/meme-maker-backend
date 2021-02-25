import { Request, Response } from 'express'

const users = [
    {
        name: 'Vitorlc',
        email: 'vitor@vitor.mail'
    },
    {
        name: 'JanainaS',
        email: 'jana@jana.mail'
    },
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    }
}