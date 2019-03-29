//  этот контроллер нужен для работы реакта
module.exports = {
  index: function (req, res) { // рендеринг индекса(в нем дальше начинает работаь реакт)

    var bundle;

    if (sails.config.environment === 'production') {
      bundle = require('../../assets.json').main.js;
      console.log(bundle);
    }

    return res.view('index', {
      bundle: bundle,
    });
  },
};
