import { createConnection } from 'net';

const client=createConnection({port:2000},()=>{
    console.log("sever is connected")
})

