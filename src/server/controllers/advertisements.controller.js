const Advertisement = require('../models/advertisement.model');

exports.getAdvertisement = async function(req, res, next) {
  try {
    return Advertisement.find((err, advertisements) => {
      return res ? res.json(advertisements) : advertisements;
    });
  } catch (err) {
    return next(err);
  }
};
