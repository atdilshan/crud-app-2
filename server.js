const express = require('express');
const bodyParser= require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connectionString = 'mongodb+srv://atdilshan:Sooddy19770827@cluster0.ktog9.mongodb.net/?retryWrites=true&w=majority';

MongoClient.connect(connectionString, (err, client) => {
  if (err) return console.error(err);

  console.log('Connected to Database');
  const db = client.db("quotesdb");
  const quotesCollection = db.collection("quotes");
});

app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
    .then(result => {
        console.log(result)
    })
    .catch(error => console.error(error));
});

app.listen(3000, function() {
    console.log('listening on 3000');
});