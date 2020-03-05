const mongoose = require('mongoose');

const FilterSchema = new mongoose.Schema({
    fields: Array,
    name: String,
    range: Array,
    type: String,
});

const Filter = mongoose.model('filters', FilterSchema);

module.exports = Filter;