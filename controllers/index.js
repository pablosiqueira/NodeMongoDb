exports.getHome = (req, res, next) => {
    res.render('shop/index.ejs', { pageTitle: 'Shop', path: '/' });
  };