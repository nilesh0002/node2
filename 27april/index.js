const express = require('express');  
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
mongoose.connect(`mongodb://localhost:27017/?directConnection=true`)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

const mongooseSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});
