import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'



const app=express()
let ourfile=fileURLToPath(import.meta.url)
let ourdir=path.dirname(ourfile)

app.get('/',(req,res)=>{
    // res.send('hello client');
    res.sendFile(path.join (ourdir,'index.html'))
});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(ourdir,'contact.html'))
})
app.get('/submit',(req,res)=>{
    console.log(req.query)
    res.send('Form submitted successfully!')
})

const post=3000
app.listen(post,()=>{
    console.log(`server: http://localhost:${post}`);
})