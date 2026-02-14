import{createServer} from 'net';
let server=createServer((socket)=>{
    socket.on('data',(data)=>{
        console.log(data.toString());
        socket.write('Hello from server');
    });
    socket.on('end',()=>{
        console.log("client the termined the connection")
    });
});

server.listen(8080,()=>{
    console.log('Server is listening on port 8080');
});

//on use to create event listener