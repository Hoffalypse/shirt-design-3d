import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import dalleRoutes from './routes/dalleRoutes.js'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({limig: '50mb'}))

app.use('/api/v1/dalle', dalleRoutes)

app.get('/', (req, res) => {
    res.status(200).json({message:'hello from dall-e'})
})



app.listen(5000, () => console.log("Server has Started at port 5000"))