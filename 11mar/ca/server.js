/*
    problem statement:-
     implement two specific post routes with the following logic:

     a)route:/user-form(user registration form )
      1) objective:- accept userid,password and email form in the form
      2) storage:-save data in users.txt
      3) logic:- *read user.txt first.
                * termination-: if the incoming email already exist in the user list,terminate and
                  send :"user email already registered"
                * success:-if unique,append the new user and send:"user  accoount created successfully"
    

     b)route:/student-form(student enrollment form )
     1.)objective:- accept student name,roll no and student email.
     2.)storage:-save data in studentdata.txt
     3.)logic:- *read studentdata.txt first.
               *termination:- if the student email  or roll no is already exist in databse.
                             terminate and send:"student record already exist,data not saved"
                *success:-if unique,append the new student record and send:
                            "student form submitted successfully"

*/

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
import fs from 'fs';

let _file = fileURLToPath(import.meta.url)
let _dirname = dirname(_file)

let server = express();
server.use(express.urlencoded({ extended: false }))

server.get('/', (req, res) => {
    res.sendFile(path.join(_dirname, './index.html'))
})

server.get('/user-form', (req, res) => {
    res.sendFile(path.join(_dirname, './user-form.html'))
})

server.get('/student-form', (req, res) => {
    res.sendFile(path.join(_dirname, './student-form.html'))
})

// Route a: User Registration Form
server.post('/user-form', (req, res) => {
    let newUser = req.body
    let filePath = path.join(_dirname, 'users.txt')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        let arr = (!err && data) ? JSON.parse(data) : []
        let exists = arr.find((user) => user.email === newUser.email)
        if (exists) {
            return res.send('user email already registered')
        }
        arr.push(newUser)
        fs.writeFile(filePath, JSON.stringify(arr), (err) => {
            if (err) console.log(err)
        })
        return res.send('user  accoount created successfully')
    })
})

// Route b: Student Enrollment Form
server.post('/student-form', (req, res) => {
    let newStudent = req.body
    let filePath = path.join(_dirname, 'studentdata.txt')
    fs.readFile(filePath, 'utf-8', (err, data) => {
        let arr = (!err && data) ? JSON.parse(data) : []
        let exists = arr.find((s) => s.email === newStudent.email || s.rollno === newStudent.rollno)
        if (exists) {
            return res.send('student record already exist,data not saved')
        }
        arr.push(newStudent)
        fs.writeFile(filePath, JSON.stringify(arr), (err) => {
            if (err) console.log(err)
        })
        return res.send('student form submitted successfully')
    })
})

server.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})
