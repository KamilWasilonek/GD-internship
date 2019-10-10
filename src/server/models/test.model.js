const mongoose = require('mongoose');

const TestSchema = new mongoose.Schema({
  link: String,
});

const Test = mongoose.model('advertisementsExternal', TestSchema);

module.exports = Test;
