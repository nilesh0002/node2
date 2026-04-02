import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename); 

let server= express();
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});         
server.get('/contact', (req, res) => {  
    res.sendFile(path.join(__dirname, 'contact.html'));
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
