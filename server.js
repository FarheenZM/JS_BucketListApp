const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

server.use(parser.json());
server.use(express.static('client/build'));
server.use(parser.urlencoded({extended: true}));

MongoClient.connect('mongodb://localhost:27017', function(err, client) {
  if (err) {
    console.log(err);
    return;
  }
  const db = client.db("cbdb");

  server.get('/api/listcountries', function(req, res){
    const listCountries = db.collection('listCountries');
    listCountries.find().toArray(function(err, allListCountries){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }
      res.json(allListCountries);
    })
  })

  server.delete('/api/listcountries', function(req,res) {
    const filterObject = {};
    const listCountries = db.collection('listCountries');
    listCountries.deleteMany(filterObject, function(err, result) {
      if(err)
      res.status(500);
      res.send()
    })
    res.status(204);
    res.send();
  })

  console.log('Connected to database');

  server.listen(3000, function(){
    console.log("Listening on port 3000");
  });
})
