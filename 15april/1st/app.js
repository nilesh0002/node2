const express=require('express')
const bodyParser=require('body-parser')
const {client}=require('pg')
const {url} =require('node:inspector')
const app=express()
app.use(bodyParser.urlencoded({extended:true}))
const client=new client({
    user:'postgres',
    host:'localhost',
    database:'todo',    
    password:'123',
    port:5433,
})
client.connect()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})  
app.post('/add',(req,res)=>{
    const task=req.body.task_name
    const query='INSERT INTO tasks (task) VALUES ($1)'
    client.query(query,[task],(err,res)=>{
        if(err){
            console.error('Error inserting task:', err)
        }else{
            console.log('Task inserted successfully')
        }
    })
})
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
})