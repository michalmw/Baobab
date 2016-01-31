var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


var Flower = require('./server/models/flower');
var app = express();


mongoose.connect('mongodb://ibuu:qwe123@ds047945.mongolab.com:47945/baobab', function(err) {
   if(err) {
       console.log(err);
   } else {
       console.log('Connect')
   }
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "GET, POST","PUT");
  next();
});
app.get('/', function(req,res) {

    res.log('home');
});

app.post('/dodaj-kwiata', function(req,res, next) {

    var flower = new Flower();

    flower.name = req.body.name;
    flower.price = req.body.price;
    flower.description = req.body.description;
    flower.photo = req.body.photo;
    // res.json(flower);
    flower.save(function(err) {
        // if (err) return next(err);
        res.json('Poprawnioe dodano ;-)');
    });
});
app.get('/lista-kwiatow', function(req,res) {

  var flowers = Flower.find(function(err,flower) {
    if(err) res.json('error:'+err);

    res.json(flower);
  });

});
app.post('/lista-kwiatow/:id', function(req, res) {

  var id = req.params.id;

  var flower = Flower.findOne({_id:id}, function(err,flower){
    res.json(flower);
  });
});

app.listen(3333, function(err) {

    if(err) throw err;
    console.log('Server running on port 3000');
});