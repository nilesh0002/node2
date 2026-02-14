function add(a,b){
    // console.log(a,b)
    // console.log(a)
    // console.log(b)
    // return 'nil';
    // return a+b;
    return a+b;
    // console.log(b)
}
let sub = (a,b)=>{
    return a-b;
}

let mul = (a,b)=>{
    return a*b;
}

let div = (a,b)=>{
    return a/b;
}
// add(3,4)
// module.exports=add

//used to export the function  also we can pass varials..
let ram=10;
module.exports={add,sub,mul,ram,div} 

// console.log(add(3,4))
// console.log(sub(4,2))


/*

module
type:-

local
core 
3rd party

*/ 