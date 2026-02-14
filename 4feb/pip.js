// import fs from 'fs'
// import {create{zip} from 'zlib'
// let read=fs.createReadStream('input.txt');
// let write=fs.createWriteStream('output.zip');
// let zip=createGzip();
// read.pipe(zip).pipe(write);

//compressing the file
// import fs from 'fs';
// import { createGzip } from 'zlib';

// const read = fs.createReadStream('input.txt');
// const write = fs.createWriteStream('output.txt.gz');
// const gzip = createGzip();

// read.pipe(gzip).pipe(write);

//decompressing the file

import fs from 'fs';
import { createGunzip } from 'zlib';    
const read = fs.createReadStream('output.txt.gz');
const write = fs.createWriteStream('decompressed.txt');
const gunzip = createGunzip();  
read.pipe(gunzip).pipe(write);  

// now take data and log it to console if err then print it
write.on('finish',()=>{
    fs.readFile('input.txt','utf-8',(err,data)=>{
        if(err){
            console.log("error reading file:",err); 
        }else{
            console.log("decompressed data:",data); 
        }   
    });
});