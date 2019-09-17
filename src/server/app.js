'use strict';
const express = require('express');
const http = require('http');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const routes = require('./router');
const cors = require('cors');
const config = require('./config');

mongoose.connect('mongodb://user1:qwerty1@ds225442.mlab.com:25442/internship');

app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use(
  '/',
  express.static(
    path.join(__dirname, '../../dist/GD-internship-angularProject')
  )
);
app.use('/api', routes);

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/GD-internship-angularProject/index.html'));
});

const server = http.createServer(app);

app.listen(config.PORT, () => {
  // console.log(`listening on ${config.PORT}`);
});
