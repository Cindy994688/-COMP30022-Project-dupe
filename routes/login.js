var express = require('express');
var router = express.Router();
var passport = require('passport');
var Admin = require('./models/admin');
var count = 0;

// Login route, powered by passport
router.post('/', function (req, res, next){
  passport.authenticate('local', (err, user) => {
    if (err) throw err;
    if (!user) res.send(false);
    else {
      res.send(true);
    };
    })(req,res,next);
});

module.exports = router;
