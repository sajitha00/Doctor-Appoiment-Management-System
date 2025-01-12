import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"
import { Server } from "socket.io"
import http from "http"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

//app.listen(port, () => console.log(`Server started on PORT:${port}`))
const server = http.createServer(app);
// Initialize socket.io
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("New client connected", socket.id)

  socket.on("disconnect", () => {
    console.log("Client disconnected", socket.id)
  });
});

server.listen(port, () => console.log(`Server started on PORT:${port}`));
export { io }