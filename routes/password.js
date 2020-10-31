var express = require('express');
var router = express.Router();
const Login = require('./models/login');
const mongoose = require('mongoose');

/* GET users listing. */
router.get('/', function (req, res){
   var pass = req._parsedOriginalUrl.path.substring(10);
   console.log(pass);
   Login.find({user:'allusers'})
      .then(info => {
        if (pass===info[0].password){res.send(true);}
        else {res.send(false);}
      })
      .catch(err => res.status(404).json({ DatabaseError: 'No Password Found' }));
 });

module.exports = router;
