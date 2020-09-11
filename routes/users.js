var express = require('express');
var router = express.Router();
const UserInfo = require('./models/userinfo');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res){
   var name = req._parsedOriginalUrl.path.substring(6);
   UserInfo.find({name: name})
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ NameError: 'No User Found' }));
 });

module.exports = router;
