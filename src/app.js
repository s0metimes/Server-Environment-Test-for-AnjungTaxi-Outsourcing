const express = require('express');
const app = express();
const helmet = require('helmet');

app.use(helmet());
app.get('/', (req, res) => res.send('Hello World!'));

const server = require('http').createServer(app);
const port = 80;
const serverIP = '10.0.0.4';

server.listen(port, serverIP, () => console.log('server is running on port: ', serverIP, port));
