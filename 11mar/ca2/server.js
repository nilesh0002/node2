/* Real-time two-way messaging using Express + Socket.IO. */

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';

const _dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);

const broadcastMessage = (sender, message) => {
    io.emit('broadcast-message', `${sender}: ${message}`);
    console.log(`broadcasted: ${sender}: ${message}`);
};

app.get('/', (req, res) => res.sendFile(join(_dirname, 'index.html')));

io.on('connection', (socket) => {
    console.log(`client connected: ${socket.id}`);

    socket.on('client-message', (msg) => {
        const message = String(msg).trim();
        if (!message) return;
        broadcastMessage('Client', message);
    });

    socket.on('disconnect', () => {
        console.log(`client disconnected: ${socket.id}`);
    });
});

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Type a message in terminal to broadcast to all clients:');
rl.on('line', (input) => {
    const message = input.trim();
    if (!message) return;

    broadcastMessage('Admin', message);
});

httpServer.listen(3000, () => console.log('server is running at http://localhost:3000'));

