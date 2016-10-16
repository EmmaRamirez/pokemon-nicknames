var mongoose   = require('mongoose');
mongoose.connect('mongodb://emmaramirez:boltaway9!@ds057386.mlab.com:57386/pokemon-nicknames');

var Pokemon = require('./models/pokemon');

var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
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


apiRouter.use(function(req, res, next) {
  console.log('Something is happening.');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
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
