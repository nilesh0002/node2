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
const task = mongoose.model('task', mongooseSchema);

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});