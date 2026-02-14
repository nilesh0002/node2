
import http from 'http';
import fs from 'fs';

let server=http.createServer((req,res)=>{
   let log=`requested url is : ${req.url},${new Date()}`;   
    if(req.url==='/'){
        fs.writeFile('server.log',log+'\n',{flag:'a'},(err)=>{
            if(err){
                console.log(err);}
            else{
                console.log('log is added to file')}
            
    })
    if(req.url ==='/'){
        fs.readFile(`index.html`,(err,data)=>{
            res.writeHead(200,{'content-type':'text/html'})
            res.write("welcome to home page")
            res.end()
        })
    }
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>welcome to about page</h1>")
        res.end()
    }else if(req.url==='/contact'){
        res.end("this is contact page")
    }
})

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});