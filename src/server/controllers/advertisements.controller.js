const Advertisement = require('../models/advertisement.model');

exports.getAdvertisement = async function (req, res) {
    return Advertisement.find((err, advertisements) => {
        if (err) {
            // return console.log(err);
        }

        return res.json(advertisements);
    });
}