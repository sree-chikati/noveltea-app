/* Mongoose Connection */
const mongoose = require("mongoose");
assert = require("assert");

const url = `mongodb+srv://dbSree:${process.env.MONGODB_PASSWORD}@startercluster.uhnfk.mongodb.net/noveltea-app?retryWrites=true&w=majority`  || 'maas-api'
mongoose.Promise = global.Promise;
mongoose.connect(
  url,
  {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false,
  },
  function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to database");

    // db.close(); turn on for testing
  }
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${url}`)
})
mongoose.set("debug", true);

module.exports = mongoose.connection