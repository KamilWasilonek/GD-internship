const mongoose = require('mongoose');

const SubscriptionsSchema = new mongoose.Schema({
    email: String
});

const Subscriptions = mongoose.model('subscriptions', SubscriptionsSchema);

module.exports = Subscriptions;