/*
use to compress and decompress data
module type : core module
            : built-in module
            : user-defined module
*/
import { gunzip, gzip } from "zlib";
import { createReadStream ,createWriteStream } from "fs";

let data="Hello world. This is a test message for zlib module in nodejs";
let read=createReadStream('input.txt');
 
// gzip(data,(err,buffer)=>{
//     if(!err){
//         console.log("compressed data:",buffer.toString('base64')); 
//     }else{
//         console.log("error during compression:",err);
//     }   
// });

gzip('read',(err,buffer)=>{

    if(err)
        console.log(err)
        let write=createWriteStream('input.txt');
        write.write(buffer)
        write.end();
    
});

gunzip('read',(err,buffer)=>{

    if(err)
        console.log(err)        
        let write=createWriteStream('input.txt');
        write.write(buffer)         
        write.end();    

});



