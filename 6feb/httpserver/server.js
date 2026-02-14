// import{createserver}from 'http';
// let server=createserver();

import http from 'http';
import fs from 'fs';
let server = http.createServer((req, res) => {
  // res.end('Hello client');
  // console.log(req.url)
  
  let log=`requested url is : ${req.url},${new Date()}`;
  if (req.url === '/') {
    fs.appendFile('server.log',log+'\n',{flag:'a'},(err)=>{
      if(err){
        console.log(err);}
      else{
        console.log('log is added to file')};
  })
    res.end('This is the home page')
  }

  else if (req.url === '/about') {
      fs.watchFile('server.log',log+'\n',{flag:'a'},(err)=>{
        if(err){
          console.log(err);}
        else{
          console.log('log is added to file')};
    })  
      res.end('This is the about page');

  }

  else if (req.url === '/contact') {
    fs.watchFile('server.log',log+'\n',{flag:'a'},(err)=>{
      if(err){
        console.log(err);}
      else{
        console.log('log is added to file')};
  })
    res.end('This is the contact page');
  }
  else if (req.url === '/services') {
    fs.watchFile('server.log',log+'\n',{flag:'a'},(err)=>{
      if(err){
        console.log(err);}
      else{
        console.log('log is added to file')};
  })
    res.end('This is the services page');}
  else {
    fs.watchFile('server.log',log+'\n',{flag:'a'},(err)=>{
      if(err){
        console.log(err);}
      else{
        console.log('log is added to file')};
  })  
    res.end('Page not found');}
});


let port = 3000;
server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});