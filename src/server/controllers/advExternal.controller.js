// const AdvExternal = require('../models/test.model');
// const Social = require('../models/social.model');

const Test = require('../models/test.model');

exports.getAdvertisementExternal = async function(req, res, next) {
  try {
    return Test.find((err, advertisementsExternal) => {
      console.log(advertisementsExternal);
      return res ? res.json(advertisementsExternal) : advertisementsExternal;
    });
  } catch (err) {
    return next(err);
  }

  //   try {
  //     return Test.find((err, adv) => {
  //       console.log(adv);
  //       //   return res ? res.json(adv) : adv;
  //     });
  //   } catch (err) {
  //     console.log(err);
  //     return;
  //   }

  //   res.send([{ link: 'http://localhost:3000/advertisement1' }]);

  //   await AdvExternal.create({ link: 'ttp://localhost:3000/advertisement1' });

  //   const data = AdvExternal.find();
  //   res.send(data);
};
