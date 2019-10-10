const AdvExternal = require('../models/advertisement-external.model');

exports.getAdvertisementExternal = async function(req, res, next) {
  try {
    return AdvExternal.find((err, test) => {
      return res ? res.json(test) : test;
    });
  } catch (err) {
    return next(err);
  }
};
