var express = require('express');
var router = express.Router();
const PersonalProject = require('./models/personalproject');
const mongoose = require('mongoose');

/* POST personal projects listing. */
router.post('/', function (req, res, next) {
  var post = new PersonalProject({
    name: req.body.name,
    projectTitle: req.body.projectTitle,
    linktogitrepo: req.body.linktogitrepo,
    description: req.body.description,
    position: req.body.position
  })
  post.save(function (err, post) {
    if (err) { return next(err) }
    res.json(201, post)
  })
})
module.exports = router;
