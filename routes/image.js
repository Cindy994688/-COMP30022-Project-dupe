var express = require('express');
var router = express.Router();
//const Chunck = require('./models/chunck');
const File = require('./models/files');
const mongoose = require('mongoose');
var fs = require('fs');
var Grid = require('gridfs-stream');
var GridFS = Grid(mongoose.connection, mongoose.mongo);

/* GET photo*/
let gfs;

router.get('/', (req, res) => {
  var name = req._parsedOriginalUrl.path.substring(7);
  /*
  File.find({filename: name})
     .then(console.log("found"))
     .catch(err => res.status(404).json({ NameError: 'No User Found' }));*/


  gfs = new mongoose.mongo.GridFSBucket(mongoose.connection.db, {
            bucketName: "fs"
        });

  gfs.openDownloadStreamByName(name).pipe(res);
});


module.exports = router;
