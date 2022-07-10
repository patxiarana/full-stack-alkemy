import express from "express"
import operationsRoutes  from './routes/routes.operations.js'



const app = express()


//middlewars
app.use(express.json())

// routes
app.use(operationsRoutes)


export default app ;