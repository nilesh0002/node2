import fs from 'fs'//core module...
// import { console } from "inspector";

// fs.writeFile(`sample.txt`,`good after noon`,{flag:'a'},(err,data)=>{
//     if(a){
//         console.log(err)
//     }
//     console.log(data)
// })


fs.writeFile(`sample.txt`,`good after noon`,{flag:'a'},(a,d)=>{
    if(a){
        console.log(a)
    }
    console.log(d)
})