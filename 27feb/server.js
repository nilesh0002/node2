import express from 'express';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

// fileurltopath:- file ke url ko path me convert karta hai
//aur dirname:- file ke url se directory ka path nikalta hai
let _file=fileURLToPath(import.meta.url)
let _dirname=dirname(_file)

let server=express();

server.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'./index.html'))
})

server.get('/about',(req,res)=>{
    res.sendFile(path.join(_dirname,'./about.html'))
})
server.get('/contact',(req,res)=>{
    res.sendFile(path.join(_dirname,'./contact.html'))
    let newdata=req.query
    console.log(newdata)

})
// server.get('/submit',(req,res)=>{
//     let newdata=req.query
//     console.log(newdata)
//     res.send('form submitted')
// })

// server.get('/submit',(req,res)=>{
//     fs.readFile('user.txt','utf-8',(err,data)=>{
//         if(err) console.log(err);
//         let newdata=req.query
//         //json.parse- convert krta hai json string ko js object me
//         let arr=JSON.parse(data)
//         arr.push(newdata)
//         fs.writeFile('user.txt',JSON.stringify(arr),(err)=>{
//             if(err) console.log(err);
//             console.log('data updated successfully')
//     })
//     res.sendFile(path.join(_dirname,'contact.html'))
//     })
// })
server.get('/submit',(req,res)=>{
    let newdata=req.query
    fs.readFile('user.txt','utf-8',(err,data)=>{
        if(err) console.log(err);
        let arr=data?JSON.parse(data):[]
        arr.push(newdata)       
        fs.writeFile('user.txt',JSON.stringify(arr),(err)=>{
            if(err) console.log(err);
            console.log('data updated successfully')
        })
    })
    fs.sendFile(path.join(_dirname,'contact.html'))
})        
server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})
