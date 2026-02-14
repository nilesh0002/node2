/*
write  a node.js stript then create writeover stream to write a hello  world in index.txt
and then read the containts from the same file using readable stream and print it into the
console...
*/

import fs from 'fs';

let ans=fs.createWriteStream('index.txt')
ans.write('1.) hello world \n')
ans.write('1.) hello world \n')
ans.write('1.) hello world \n')
ans.write('1.) hello world \n')
ans.write('1.) hello world \n')

ans.on('finish', () => {
    console.log(data);
});
ans.on('error',(err)=>{
    console.log(err)
})


