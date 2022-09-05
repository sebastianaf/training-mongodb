var MongoClient = require("mongodb").MongoClient;

require("dotenv").config();
const url = process.env.DB_MONGO_URL;

console.log(url);

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
