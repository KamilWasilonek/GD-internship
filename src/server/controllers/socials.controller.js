const Social = require('../models/social.model');

exports.getSocials = async function(req, res, next) {
  try {
    return Social.find((err, socials) => {
      return res ? res.json(socials) : socials;
    });
  } catch (err) {
    return next(err);
  }
};
