import { createServer } from 'net';

let server=createServer()




server.listen(2000,()=>{
    console.log("server connected")
})