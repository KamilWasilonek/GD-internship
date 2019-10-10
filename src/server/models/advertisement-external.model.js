const mongoose = require('mongoose');

const AdvExternalSchema = new mongoose.Schema({
  link: String,
});

const AdvExternal = mongoose.model('advertisements-ext', AdvExternalSchema, 'advertisements-ext');

module.exports = AdvExternal;
