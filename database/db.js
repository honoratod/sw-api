const mongoose = require("mongoose");
const dbPath = "mongodb://localhost:27017/swapidb";
mongoose.connect(dbPath, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;


/***********************************
// newdb is the new database we create
var url = "mongodb://localhost:27017/swapidb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    // print database name
    console.log("db object points to the database : "+ db.databaseName);
    // after completing all the operations with db, close it.
    db.close();
});
 */
/*
collection.findOne({name: 'Togo'})
  .then(item => {
    console.log(item)
  })
  .catch(err => {
  console.error(err)
  })
*/