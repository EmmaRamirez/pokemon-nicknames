// server.js

// BASE SETUP
// =============================================================================

var mongoose   = require('mongoose');
mongoose.connect('mongodb://emmaramirez:boltaway9!@ds057386.mlab.com:57386/pokemon-nicknames'); // connect to our database

var Pokemon = require('./models/pokemon');

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        // set our port

// ROUTES FOR OUR API

var router = express.Router();
// get an instance of the express Router

app.use(express.static('public'));

router.use(function(req, res, next) {
  console.log('Something is happening.');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
    express.static('index.html');
});

router.route('/pokemon')
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



router.route('/pokemon/:pokemon_id')
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

router.route('/pokemon/:pokemon_species')
  .get(function(req, res) {
    Pokemon.find({ 'species': req.params.pokemon_species }, function(err, pokemon) {
      if (err) res.send(err);
      res.json(pokemon);
    });
  });



// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
