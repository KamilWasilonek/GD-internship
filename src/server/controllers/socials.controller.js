const Social = require('../models/social.model');

exports.getSocials = async function (req, res) {
    return Social.find((err, socials) => {
        if (err) {
            // return console.log(err);
        }

        return res.json(socials);
    });
}