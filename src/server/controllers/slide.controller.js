const Slide = require('../models/slide.model');

exports.getSlideshow = async function (req = null, res = null,next) {
    try {
        return Slide.find((err, slides) => {
            if (err) {
                // return console.log(err);
            }

            return res ? res.json(slides) : slides;
        });
    }
    catch (err) {
        return next(err);
    }

}

