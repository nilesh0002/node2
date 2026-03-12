

import express from 'express';
import {fileURLToPath} from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';
import {body,validationResult} from 'express-validator'

let _file=fileURLToPath(import.meta.url)
let _dirname=dirname(_file)

let server=express();

server.use(express.urlencoded({extended:false}))
server.get('/',(req,res)=>{
//    res.send('<h1>hello world</h1>')
     res.sendFile(path.join(_dirname,'./index.html'))

})
server.get('/contact',(req,res)=>{
    res.sendFile(path.join(_dirname,'./contact.html'))

})
server.post('/submit',[
    body('name').not().isEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Please enter a valid email address')],
    (req,res)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    let newdata=req.body
    fs.readFile('user.txt','utf-8',(err,data)=>{
        if(err) console.log(err);
        let arr=data?JSON.parse(data):[]
        arr.push(newdata)       
        fs.writeFile('user.txt',JSON.stringify(arr),(err)=>{
            if(err) console.log(err);
            console.log('data updated successfully')
        })
    })
    res.sendFile(path.join(_dirname,'/contact.html'))
})        
server.listen(3000,()=>{
    console.log('server is running at http://localhost:3000')
})
