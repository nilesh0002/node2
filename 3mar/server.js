import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import {dirname} from 'path';
import fs from 'fs'

let _file=fileeURLToPath(import.meta.url)
let __dirname=dirname(_file)

let server=express();

server.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./index.html'))
});

server.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname,'./about.html'))
});

server.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'./contact.html'))

});

server.get('/send-message',(req,res)=>{
    // let newdata=req.query
    // fs.readFile('services.txt','utf-8',(err,data)=>{
    //     if(err) console.log(err);
    //     let arr=data?JSON.parse(data):[]
    //     arr.push(newdata)   
    //     fs.writeFile('services.txt',JSON.stringify(arr),(err)=>{
    //         if(err) console.log(err);
    //         console.log('data updated successfully')
    //     })
    // })

    let newdata=req.query
    


    res.sendFile(path.join(__dirname,'./contact.html'))
})

let port=3000;
server.listen(port,()=>{
    console.log(`server listening on http://localhost:${port}`)
})