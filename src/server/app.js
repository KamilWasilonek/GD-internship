'use strict';
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();

const config = require('./config');

app.use(express.static(path.join(__dirname, '../../dist/project')));

app.get('/*', (req, res) => {
  res.sendFile('../../dist/project/index.html', { root: __dirname });
});

const server = http.createServer(app);

app.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`);
});
