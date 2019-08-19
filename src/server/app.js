'use strict';
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const routes = require('./router');

const config = require('./config');

app.use(
  '/',
  express.static(
    path.join(__dirname, '../../dist/GD-internship-angularProject')
  )
);
app.use('/', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/GD-internship-angularProject/index.html'));
});

const server = http.createServer(app);

app.listen(config.PORT, () => {
  console.log(`listening on ${config.PORT}`);
});
