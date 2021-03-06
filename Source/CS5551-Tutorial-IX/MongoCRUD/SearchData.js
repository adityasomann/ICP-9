/*
 * Created by mnpw3d on 20/10/2016.
 */

 var MongoClient = require('mongodb').MongoClient;
 var assert = require('assert');
 var url = 'mongodb://root:root@ds137261.mlab.com:37261/aseprojectsheriaravind';
// var findUser = function(db, callback) {
//     var cursor =db.collection('demoase').find( );
//     cursor.each(function(err, doc) {
//         assert.equal(err, null);
//         if (doc != null) {
//             console.log(doc);
//         } else {
//             callback();
//         }
//     });
// };
var findUserwithPhno = function(db,callback) {
    var dbo = db.db("aseprojectsheriaravind");
    var cursor = dbo.collection('demoase').find({"ph.no":"9998887771"});

    cursor.each(function(err,doc) {
        assert.equal(err,null);
        if(doc != null)
        {
            console.log("First Name:" + doc.fname);
            console.log("Last Name:" + doc.lname);
            console.log("city:" + doc.address.city);
        }
    });
}

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    findUserwithPhno(db, function() {
        db.close();
    });
});

// var findUserwithName = function(db,callback) {
//     var cursor = db.collection('demoase').find({"fname":"Sidrah"});
//     cursor.each(function(err,doc) {
//         assert.equal(err,null);
//         if(doc != null)
//         {
//             console.log("First Name:" + doc.fname);
//             console.log("Last Name:" + doc.lname);
//             console.log("city:" + doc.address.city);
//         }
//     });
// }
// var findUserwithUniversity = function(db, callback) {
//     var cursor = db.collection('demoase').find({"education.university":"UMKC"});
//     cursor.each(function(err,doc){
//        assert.equal(err,null);
//        if(doc != null)
//        {
//            console.log("First Name:" + doc.fname);
//            console.log("University:" + doc.education.university);
//            console.log("Degree:" + doc.education.degree);
//            console.log("Major:" + doc.education.major);
//            console.log("mail:" + doc.mail);
//        }
//     });
// }
// MongoClient.connect(url, function(err, db) {
//     assert.equal(null, err);
//     findUserwithUniversity(db, function() {
//         db.close();
//     });
// });