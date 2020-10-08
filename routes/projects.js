var express = require('express');
var router = express.Router();
const PersonalProject = require('./models/personalproject');
const mongoose = require('mongoose');

/* GET personal projects listing. */
router.get('/', function (req, res){
   PersonalProject.find()
      .then(user => res.json(user))
      .catch(err => res.status(404).json({ NameError: 'No User Found' }));
 });
module.exports = router;
