const express = require('express');
const CarRouter = require('./cars/carRouter.js');
const server = express();

server.use(express.json());
server.use('/api/cars', CarRouter);

server.use((error, req, res, next) => {
    console.log(error)
    res.status(500).json({ message: "Something went wrong", })
})

server.get('/', (req, res) => {
    res.send('<h3>node-db2-project</h3>');
});

module.exports = server;