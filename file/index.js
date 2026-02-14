//http server
const http=require("http");
const fs=require('fs');


// webserver we make send anything
const myserver=http.createServer((req,res)=>{
    // console.log("Neew Req.");
    const log=`${Date.now()}:${req.url}New reeq Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/home': res.end('home page')
            break
            case '/about':res.end('i am page')
            break
            default:
                res.end("404 not found");
            }
            // res.end("Hello from server again"); 
    })
    //console.log(req); //req= to get all info of the 
    //res.end("Hello from server again"); // we can send html.file 
    // now we need port number
    // port is like a door 
});
/*
now we need handeler fun for http
()=>{} fun ..responsible for incoming request.. where 
req=kon user request kr rha uska all data ip address and all         res= ky request kr rha 

*/
myserver.listen(8000,()=>console.log('server Started'));
// 8000 is port then server message.. for me