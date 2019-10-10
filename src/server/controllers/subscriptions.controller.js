const Subscriptions = require('../models/subscriptions.model');
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.addSubscription = (req, res) => {
  const subscriptionsData = new Subscriptions(req.body);

  if (!_isValidEmail(req.body.email)) {
    return res.json({ message: 'Not valid Email', isError: true });
  }

  Subscriptions.findOne(req.body, (err, item) => {
    if (item) {
      return res.json({ message: 'Email is in used', isError: true });
    } else {
      subscriptionsData.save().then(() => res.json({ message: 'Success', isError: false }));
    }
  });
};

function _isValidEmail(email) {
  return !!(email && email.match(EMAIL_PATTERN));
}
