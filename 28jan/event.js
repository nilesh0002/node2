/*
local module --
core module -- we dont have to install any file or anythings
3rd party module--
*/
import{EventEmitter} from 'events'
let booking=new EventEmitter
//for targeting
booking.on('start',()=>{
    console.log("hello user is started booking the tickets")
})

booking.on('registered',()=>{
    console.log("user have registered")
})


booking.on('boooked',()=>{
    console.log("user have booked the tickets")
})
//create a event
booking.emit('Start')
booking.emit('registered')
booking.emit('boooked')
