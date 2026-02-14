import { createServer } from "http";

let server=createServer((req,res)=>{
    let log=`requested url is : ${req.url},${new Date()}`;
    res.end()
})


const port=3000
server.listen(port,()=>{
    console.log(`server is working on http://localhost:${port}`)
})