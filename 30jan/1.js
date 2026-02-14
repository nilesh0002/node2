/*
use writestream,sample.txt
your name
your qualification
about your self
done

use readstream
read data
after reading 
print
*/


import fs from 'fs'

let a=fs.createWriteStream('sample.txt')
a.write('name nilesh\n')
a.write('name pursuring btech\n')
// a.write('done\n')
a.end()

a.on('finish',()=>{
    // console.log('done')


// a.on('end',()=>{
//     console.log('reading is done')

    let rd=fs.createReadStream('sample.txt','utf8')
    rd.on('data',(chunk)=>{
        console.log(chunk)
    })
    rd.on('error',(err)=>{
        console.log(err)
    })

})
// console.log('done');

// a.on('error',(err)=>{
//     console.log(err)
// })

