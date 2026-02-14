import fs from 'fs';

let output=fs.createWriteStream('writestream')

output.write('1.)this is write stream\n')
output.write('2.)this is write stream\n')
output.write('3.)this is write stream\n')
output.write('4.)this is write stream\n')

output.end()

output.on('finish',()=>{
    console.log('ok bye')
})

output.on('error',(err)=>{
    console.log(err)
})

/*
write  a node.js stript then create writeover stream to write a hello  world in index.txt
and then read the containts from the same file using readable stream and print it into the
console...
*/