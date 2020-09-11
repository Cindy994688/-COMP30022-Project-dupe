// Correctly stream a file from disk into GridFS using openUploadStream

const mongodb = require('mongodb');
const fs = require('fs');
var MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Snow:Wiggle3_Waggle@fire451.jxyew.mongodb.net/fire451?retryWrites=true&w=majority";
test = require('assert');

MongoClient.connect(uri, function(err, client) {
  console.log("connected");
  var db = client.db("potato_powered");

  var bucket = new mongodb.GridFSBucket(db);
  var uploadStream = bucket.openDownloadStreamByName('duprobot.jpg'); //where are we reading the file to

  //wait for reading to finish before progressing
  //var robo = fs.readFileSync('./robo.jpg');
  var id = uploadStream.id;

  console.log("sucessfully accessed photo");

  // Wait for stream to finish
  uploadStream.once('finish', function() {
    var chunksColl = db.collection('fs.chunks');
    var chunksQuery = chunksColl.find({ files_id: id });

    console.log("finished all uploads");
    console.log("all checks done");
    client.close();
  });
  //Upload photo to stream
  //readStream.pipe(uploadStream);
  console.log(uploadStream);
  console.log("sucessfully uploaded photo");
});
