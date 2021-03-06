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

mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://user1:qwerty1@ds225442.mlab.com:25442/internship',{ useNewUrlParser: true });


app.use(cors());
app.use(bodyParser.json({ limit: '500mb' }));
app.use('/', express.static(path.join(__dirname, '../../dist/GD-internship-angularProject')));
app.use('/api', routes);

app.get('/advertisement1', (req, res) => {
  res.sendFile(path.resolve('src/assets/mocks/advHTML/adv1.html'));
});
app.get('/advertisement2', (req, res) => {
  res.sendFile(path.resolve('src/assets/mocks/advHTML/adv2.html'));
});
app.get('/advertisement3', (req, res) => {
  res.sendFile(path.resolve('src/assets/mocks/advHTML/adv3.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.resolve('dist/GD-internship-angularProject/index.html'));
});

const server = http.createServer(app);

app.listen(config.PORT, () => {
  // console.log(`listening on ${config.PORT}`);
});
