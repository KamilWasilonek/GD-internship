const Slide = require('../models/slide.model');

exports.getSlideshow = async function (req, res) {
    return Slide.find((err, slides) => {
        if (err) {
            // return console.log(err);
        }

        return res.json(slides);
    });
}

