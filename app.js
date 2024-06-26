
import express from 'express'
import http from "http"
import { config } from 'dotenv'
import bodyParser from 'body-parser'
import { connectDB } from './src/utils/db.util.js'
import cors from 'cors'
import options from './src/utils/cors.util.js'
import authRouter from './src/routes/auth.route.js'
import userRouter from './src/routes/user.route.js'
import empLaptopRouter from './src/routes/empLaptop.route.js'
import { ApiResponse } from './src/responses/api.response.js'
import { serveSwagger, setupSwagger } from './swagger.config.js'

config()
connectDB()

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 5000
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use(bodyParser.json())
app.use(express.json())
app.use("/api/v1/user", userRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/laptop", empLaptopRouter)
// app.use("*", (req, res) => {
//     res.status(404).json(new ApiResponse(false, "Route not found", null))
// })

// Serve Swagger UI
app.use('/api-docs', serveSwagger, setupSwagger)

server.listen(PORT, (err) => {
    if (err) throw new Error("[LOG]: Server failed to start")
    console.log(`[LOG]:Server started successfully on port ${PORT}`)
})
