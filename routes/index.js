var express = require('express');
var sendMail = require('../lib/send_mail.js');

var router = express.Router();

router.post('/contacto', function(req, res) {
  sendMail(req.body);
  /*
  res.redirect('/index.html');*/
  res.redirect(req.get('referer'));
});

module.exports = router;
