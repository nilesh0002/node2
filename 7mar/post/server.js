import express from 'express'
import path from 'path'
import {fileURLToPath} from 'url'


const app=express()
app.use(express.urlencoded({extended:false}))

let ourfile=fileURLToPath(import.meta.url)
let ourdir=path.dirname(ourfile)

app.get('/',(req,res)=>{
    // res.send('hello client');
    res.sendFile(path.join (ourdir,'index.html'))

});

app.get('/contact',(req,res)=>{
    res.sendFile(path.join(ourdir,'contact.html'))
})
app.post('/submit',(req,res)=>{
    console.log(req.body)
})

const post=3000
app.listen(post,()=>{
    console.log(`server: http://localhost:${post}`);
})