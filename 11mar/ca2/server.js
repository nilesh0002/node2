/*
    problem statement:- real time bi-directional messeging 

    "design and implement a real time communication system " using node.js express and socket.io. the goal is to establish a
    bi-directional connection where.


    1.) the client can send messages from a web-based form to the server
    2.) the server can receive that message and broadcast it to all connected clients in real time.
    3.) the server admin can also send messages directly from the teminal(command line)
    to all the connected clients using the readline module.
*/

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import readline from 'readline';
import { appendFile } from 'fs/promises';

const _file = fileURLToPath(import.meta.url);
const _dirname = dirname(_file);

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer);
const userLogFile = join(_dirname, 'user-log.txt');

app.get('/', (req, res) => {
    res.sendFile(join(_dirname, 'index.html'));
});

io.on('connection', (socket) => {
    console.log(`client connected: ${socket.id}`);

    const { headers = {}, address, time, url, xdomain, secure, issued, auth = {}, query = {} } = socket.handshake;
    const userIp = (headers['x-forwarded-for'] || address || 'unknown-ip').toString();
    const userAgent = headers['user-agent'] || 'unknown-agent';
    const referer = headers.referer || headers.referrer || 'unknown-referer';
    const origin = headers.origin || 'unknown-origin';
    const host = headers.host || 'unknown-host';
    const connectedAt = new Date().toISOString();

    const logEntry = `${JSON.stringify({
        connectedAt,
        socketId: socket.id,
        ip: userIp,
        userAgent,
        url: url || 'unknown-url',
        referer,
        origin,
        host,
        transport: socket.conn.transport.name,
        xdomain,
        secure,
        handshakeTime: time,
        issued,
        auth,
        query
    })}\n`;

    appendFile(userLogFile, logEntry)
        .then(() => console.log(`user log saved for ${socket.id}`))
        .catch((err) => console.error('failed to write user log:', err));

    socket.on('client-message', (msg) => {
        console.log(`message from client: ${msg}`);
        io.emit('broadcast-message', `Client: ${msg}`);
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
    if (input.trim()) {
        io.emit('broadcast-message', `Admin: ${input.trim()}`);
        console.log(`broadcasted: ${input.trim()}`);
    }
});

httpServer.listen(3000, () => {
    console.log('server is running at http://localhost:3000');
});

