import express from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

app.get("/mnevfel", (req, res) => {
    res.status(200).json({ mnevfel: "Here is mine !" })
})

app.get("/ocanboga", (req, res) => {
    res.status(200).json({ ocanboga: "Hello world!" })
})

app.listen(3000)