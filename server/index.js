import { Express } from "express";
import { Socket } from "socket.io";
import http from "http";
import cors from 'cors'

const port = process.env.PORT || 3000;

const app = Express();
const server = http.createServer(app).listen(port, () => {console.log("Server runnning on port 4000")});

//Socket setup
const io = Socket(server)
io.on('connection', (socket) => {
    console.log("connectoin made :=>", socket.id)
})