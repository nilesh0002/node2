import express from 'express';

let server=express();

server.get('/',(req,res)=>{
    res.writeHead('context-type','html/text')
    res.send('this is home page')
})

server.get('/about',(req,res)=>{
    res.send('this is about page')
})

server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})