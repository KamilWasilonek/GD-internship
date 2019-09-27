const mongoose = require('mongoose');

const SocialSchema = new mongoose.Schema({
    icon: String,
    title: String,
    url: String,
    
});

const Social = mongoose.model('socials', SocialSchema);

module.exports = Social;