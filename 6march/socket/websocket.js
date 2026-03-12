import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import  Readline  from 'readline';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
//import { cookies } from 'cookie-parser';
//import cookieParser from 'cookie-parser';

const app=express();
const server=http.createServer(app);
const io=new Server(server);

let __dirname=dirname(fileURLToPath(import.meta.url));

const rl=Readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

//SERVER SE SINGLE STRING BHEJNA(terminal menin type kro)

io.on('connection',(socket)=>{
    //CLIENT SE SINGLE STRING AANA
    socket.on('message',(msg)=>{
        console.log('Message from client:',msg);//terminal men value show hogi
        io.emit('message',"Message from server: " + msg);//sbko dikhne ke liye
    });
});
rl.on('line',(input)=>{
    io.emit('message',"Message from server: " + input);//shirf text bhejne ke liye
});

server.listen(3000,()=>{
    console.log('Server is running on port http://localhost:3000');
});