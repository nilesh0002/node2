// import fs from'fs';

// let data=fs.createReadStream('sample.txt','utf8')

// data.on('data',(chunk)=>{
//     console.log(chunk)
// })
// data.on('end',()=>{
//     console.log('reading is done')
// })

// data.on('error',(err)=>{
//     console.log(err)
// })

/*
all are predefine event
DATA
END
ERROR
*/

import fs from'fs';

let data=fs.createReadStream('sample.txt',{encoding:'utf8',start:1,end:3})

data.on('data',(chunk)=>{
    console.log(chunk)
})
data.on('end',()=>{
    console.log('reading is done')
})

data.on('error',(err)=>{
    console.log(err)
})


