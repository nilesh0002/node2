
//*******createing  and writing  in file*****************/
// let fs=require('fs')
//fun to create a file by using node  alway inside the fs module .....(fs here is module)
// fs.writeFile('sample.txt','this is a sample file created by using node',(err,data)=>{

//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// }) //now we use call back fun







// const { error } = require('console')
let ab=require('fs')
// ab.writeFile('pirate.txt','hello bro',(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)

// })
// ab.writeFileSync("abhishek.txt",'name is abhishek')

//***********this is for reading file**************/
// let re=ab.readFileSync('abhishek.txt','utf8')
// console.log(re)

/********asyncr*/
ab.readFile('abhishek.txt','utf8',(err,data)=>{
    if(err){
        console.log(err)
    }
    else
        console.log(data)

})




// console.log(fs)