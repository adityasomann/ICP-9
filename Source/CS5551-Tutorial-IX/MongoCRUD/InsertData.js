/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://10-1:alohomora@ds217349.mlab.com:17349/aseicp9';
//var url = 'mongodb://marmik:2621@ds051923.mlab.com:51923/demo';
var insertDocument = function(db, callback) {
    var dbo = db.db("aseicp9");
    dbo.collection('ICP9').insertOne( {
        "fname" : "Aditya",
        "lname" : "Soman",
        "userid" : "001",
        "ph.no" : "8166944909",
        "address":{
            "street":"Wyandotte St",
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"adityasomann@gmail.com"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted a document into the asedemo collection.");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});