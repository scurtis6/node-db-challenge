const express = require('express');
const helmet = require('helmet');

const ProjectRouter = require('./routers/projects/projects-router');
const ResourceRouter = require('./routers/resources/resources-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/projects', ProjectRouter);
server.use('/api/resources', ResourceRouter);

module.exports = server