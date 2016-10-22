var mongoose   = require('mongoose');
mongoose.connect('mongodb://emmaramirez:boltaway9!@ds057386.mlab.com:57386/pokemon-nicknames');

var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var pokemondb = null;

var Pokemon = require('./models/pokemon');

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

function connectDB(cb) {
  mongoClient.connect('', function () {
    assert.eqaul(null, err);
    pokemondb = db;
    callback(null);
  })
}



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API

var apiRouter = express.Router();
var baseRouter = express.Router();

app.use(express.static('public'));

var capitalize = function (string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// app.get('/:species', function (req, res) {
//   console.log(req.params.species);
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write("<!DOCTYPE html> <html lang='en'> <head> <title>Pokemon Nicknames for " + capitalize(req.params.species) + " | Browse, Favorite, and Contribute Pokemon Nicknames</title> <meta name='viewport' content='width=device-width, initial-scale=1.0'> <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet'> <link href='../styles/normalize.css' rel='stylesheet'> </head> <body> <main> <div id='mountNode'> <h3 style='padding: 10vw; text-align:center; width: 100%; height: 100%'>Loading...<br></h3> </div> </main> <script src='https://use.fontawesome.com/504eae363c.js'></script> <script src='../bundle.js'></script> </body> </html>")
//   res.send();
// });

app.post('/submit-nickname', function (req, res) {
  console.log('Species' + req.body.species);
  console.log('Nickname ' + req.body.nickname);
  console.log('Description ' + req.body.description);

  Pokemon.findOne({ 'species': req.body.species }, function (err, pokemon) {
    if (err) res.send(err);
    pokemon.nicknames.push({
      name: req.body.nickname,
      description: req.body.description === '' ? 'No description provided.' : req.body.description,
      tags: req.body.tags === '' ? [] : req.body.tags.replace(/\#/, '').split(','),
      upvotes: 0,
      downvotes: 0,
    });
    pokemon.save(function (err) {
      if (err) res.send(err);
      res.writeHead(302, {
        'Location': '/#!' + req.body.species
      });
      res.end();
    });
  })
});

app.post('/vote', function (req, res) {
  console.log(req.body.species, req.body.name, req.body.upvotes, req.body.downvotes, req.body.type);
  Pokemon.findOne({ 'species': req.body.species }, function (err, pokemon) {
    if (err) res.send(err);

    function findNick(nickname) {
      return nickname.name === decodeURIComponent(req.body.name);
    }

    var nick = pokemon.nicknames.find(findNick);

    nick.upvotes = Number(req.body.upvotes) + (req.body.type === 'upvote' ? 1 : 0);
    nick.downvotes = Number(req.body.downvotes) + (req.body.type === 'downvote' ? 1 : 0);

    pokemon.save(function (err) {
      if (err) res.send(err);
      res.end();
    })
  });

});



apiRouter.use(function(req, res, next) {
  console.log('Something is happening.');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Content-Security-Policy", "upgrade-insecure-requests")
  next();
});

apiRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    express.static('index.html');
});

apiRouter.route('/pokemon')
  .post(function(req, res) {
    var pokemon = new Pokemon();
    pokemon.species = req.body.name;
    pokemon.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'Pokemon created!' });
    })
  })

  .get(function(req, res) {
    Pokemon.find(function(err, pokemon) {
      if (err) res.send(err);
      res.json(pokemon);
    })
  });



apiRouter.route('/pokemon/:pokemon_id')
  .get(function(req, res) {
    Pokemon.find({ 'id': req.params.pokemon_id }, function(err, pokemon) {
      if (err) res.send(err);
      res.json(pokemon);
    });

    // Pokemon.findById(req.params.pokemon_id, function(err, pokemon) {
    //   if (err) res.send(err);
    //   res.json(pokemon);
    // });
  });

apiRouter.route('/pokemon/:pokemon_species')
  .get(function(req, res) {
    Pokemon.find({ 'species': capitalize(req.params.pokemon_species) }, function(err, pokemon) {
      if (err) res.send(err);
      res.json(pokemon);
    });
  });


app.use('/api', apiRouter);


app.listen(port);
console.log('Magic happens on port ' + port);
