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

mongoose.connect('mongodb://fabledva:grifon630@ds219308.mlab.com:19308/svelte-db');

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
  console.log(`listening on ${config.PORT}`);
});
