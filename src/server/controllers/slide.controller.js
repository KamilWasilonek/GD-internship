const Slide = require('../models/slide.model');

exports.getSlideshow = async function (req = null, res = null) {
    return Slide.find((err, slides) => {
        if (err) {
            // return console.log(err);
        }

        return res ? res.json(slides) : slides;
    });
}

