import express from 'express';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';

// fileurltopath:- file ke url ko path me convert karta hai
//aur dirname:- file ke url se directory ka path nikalta hai
let _file=fileURLToPath(import.meta.url)
let _dirname=dirname(_file)

let server=express();

server.get('/',(req,res)=>{
    // res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})

    res.sendFile(path.join(_dirname,'./index.html'))
    // res.send('this is home page')
})

server.get('/about',(req,res)=>{
    res.send('this is about page')
})

server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})