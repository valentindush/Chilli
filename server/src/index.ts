import express from 'express';
import socketIO from 'socket.io';

const app:any =  express();

app.listen(4000, ()=>{
    console.log('Server is running on port 4000');
})

// I'll use socket io to communicate with the client