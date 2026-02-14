
// import {createServer} from'net' 

//function..inside it we take call back value
//try 
// const server=createServer((Socket)=>{
//     console.log('client connected')

//     Socket.on('data',(data)=>{
//         console.log(data)
//         Socket.write('hello client,welcome to our server')
//     })
//     Socket.on('end',()=>{
//         console.log('client disconnected')
//     })
// }) 

// server.listen(2000,()=>{
//     console.log('server is listening')
// })


import{createServer} from 'net';

const server = createServer((socket) => {
    console.log("Client connected");

    socket.on('data', (data) => {
        console.log(data)
    })
    socket.on('end', () => {
        console.log("Client disconnected");
    });
});
server.listen(2000, ()=>{
    console.log("Duplex server is listening on port 2000");
})