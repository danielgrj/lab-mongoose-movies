const Celebrity = require('./../models/Celebrity');

exports.getCelebrities = async (req, res, next) => {
  const celebrities = Celebrity.find();
  res.render('celebrities/index', { celebrities });
};
