// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Cors from 'cors'
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

export default function getHandler(req, res) {
  res.json({ data: "prova" })
}
