var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PokemonSchema = new Schema({
  species: String,
  id: String,
  nicknames: [
    {
      name: String,
      description: String,
      upvotes: Number,
      downvotes: Number,
      tags: [String]
    }
  ]
}, { collection: 'pokemon' });

module.exports = mongoose.model('Pokemon', PokemonSchema);
