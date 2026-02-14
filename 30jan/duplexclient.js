// import { createConnection } from 'net'
// const client=createConnection({port:2000},()=>{
//     console.log('connected to server')
//     client.write('hello server')
// })

// client.on('data',(data)=>{
//     console.log(data.toString())
//     client.end()
// })
// client.on('end',()=>{
//     console.log('disconnected from server')
// })


import {createConnection} from 'net';

const client = createConnection({port:2000},()=>{
    console.log("Connected to Duplex server")
    client.write("Hello from Duplex Client")
})

client.on('data',(data)=>{
    console.log("Received from server:", data.toString())
    client.end()
})

client.on('end',()=>{
    console.log("Disconnected from server")
})