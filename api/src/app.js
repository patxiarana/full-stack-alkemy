import express from "express"
import operationsRoutes  from './routes/routes.operations.js'
import cors from "cors"


const app = express()

//middlewars
app.use(express.json())
app.use(cors())

// routes
app.use(operationsRoutes)


export default app ;