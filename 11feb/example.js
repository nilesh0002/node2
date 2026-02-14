
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
    res.writeHead(200,{'content-type':'text/html'})
    res.write("welcome to home page")
    res.end()
    }else if(req.url==='/about'){
        res.writeHead(200,{'content-type':'text/html'})
        res.write("<h1>welcome to about page</h1>")
        res.end()
    }else if(req.url==='/contact'){
        res.end("this is contact page")
    }
})

let port=3000;
server.listen(port,()=>console.log("server running"))




// import http from 'http';
// import fs from 'fs';

// const server = http.createServer((req, res) => {
//     // Log every request
//     const log = `requested url is : ${req.url}, ${new Date().toISOString()}\n`;
    
//     // Always append log (for all routes)
//     fs.appendFile('server.log', log, (err) => {
//         if (err) {
//             console.error('Error writing to log file:', err);
//         }
//         // No need to log "log is added" every time - it can be noisy
//     });

//     if (req.url === '/') {
//         // Serve the HTML file
//         fs.readFile('index.html', (err, data) => {
//             if (err) {
//                 res.writeHead(500, { 'Content-Type': 'text/plain' });
//                 res.end('Error: Could not read index.html');
//                 return;
//             }

//             res.writeHead(200, { 'Content-Type': 'text/html' });
//             res.write(data);
//             res.end();
//         });
//     } 
//     else if (req.url === '/about') {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.write('<h1>Welcome to About Page</h1>');
//         res.end();
//     } 
//     else if (req.url === '/contact') {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('This is contact page');
//     } 
//     else {
//         // Optional: handle 404
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('404 - Page Not Found');
//     }
// });

// const port = 3000;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });