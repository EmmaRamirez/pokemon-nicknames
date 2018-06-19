import json
import status
from pymongo import MongoClient, ReturnDocument
import logging
import os
from bson.json_util import dumps
from datetime import date
from tornado import web, escape, ioloop, httpclient, gen
from pokemon import Pokemon
from nickname import Nickname
import os
from dotenv import load_dotenv
from os.path import join, dirname

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('api')

DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
HOST = os.getenv('HOST')
PORT = os.getenv('PORT')

connectionstring = 'mongodb://%s:%s@%s:%s/pokemon-nicknames' % (DB_USER, DB_PASS, HOST, PORT)

logger.info(connectionstring)

client = MongoClient(connectionstring)
print(client)
db = client['pokemon-nicknames']

class MainHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def post(self):
        self.write('some get')

    def get(self):
        message = "Pokemon Nicknames Service v1"
        db=self.settings['db']
        logger.info(message)
        self.write(message)

    def options(self):
      self.set_status(204)
      self.finish()

class VoteHandler(web.RequestHandler):
    def get(self):
        pass

    def post(self):
        pass

# app.post('/submit-nickname', function (req, res) {
#   console.log('Species' + req.body.species);
#   console.log('Nickname ' + req.body.nickname);
#   console.log('Description ' + req.body.description);

#   Pokemon.findOne({ 'species': req.body.species }, function (err, pokemon) {
#     if (err) res.send(err);
#     pokemon.nicknames.push({
#       name: req.body.nickname,
#       description: req.body.description === '' ? 'No description provided.' : req.body.description,
#       tags: req.body.tags === '' ? [] : req.body.tags.replace(/\#/, '').split(','),
#       upvotes: 0,
#       downvotes: 0,
#     });
#     pokemon.save(function (err) {
#       if (err) res.send(err);
#       res.writeHead(302, {
#         'Location': '/#!' + req.body.species
#       });
#       res.end();
#     });
#   })
# });


class NicknameHandler(web.RequestHandler):
    def post(self):
        species = self.get_argument('species')
        nickname = self.get_argument('nickname')
        description = self.get_argument('description')
        tags = self.get_argument('tags')
        nick = {
          'name': nickname,
          'description': description,
          'tags': tags.split(','),
          'upvotes': 1,
          'downvotes': 0
        }

        names = []

        document = db.pokemon.find_one({ 'species': species })
        for n in document['nicknames']:
            names.append(n['name'])
        if nickname in names:
            self.write({
                'result': {
                    'error': 'Error: Name already exists!'
                }
            })
            # raise Exception('That nickname already exists!')
        else:
            db.pokemon.update_one({
                'species': species
            }, {
                '$push': { 'nicknames': nick }
            })
            self.write({
            'result': dumps(document)
            })

def is_number(s):
  try:
    float(s)
    return True
  except ValueError:
    return False


class PokemonHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def find_one_species(self, species):
        document = db.pokemon.find_one({ 'species': species })
        return document

    def find_one_id(self, id):
        document = db.pokemon.find_one({ 'id': id })
        return document

    def find_30(self):
        document = db.pokemon.find().sort("id").limit(30)
        return document

    def post(self):
        db.pokemon.save()
        return 'It worked'

    def get(self, slug=None):
        logger.info('requested {}'.format(slug))
        entry = None
        d = None
        if slug is not None:
            entry = slug.capitalize()
            d = self.find_one_species(species=entry)
        else:
            d = self.find_30()
        self.write(dumps(d))

class PokemonPageHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def retrieve(self, page=1, limit=30):
        skipN = (page - 1) * limit
        document = db.pokemon.find().sort("id").skip(skipN).limit(limit)
        return document

    def get(self, slug=1):
        logger.info('retrieving page {}'.format(slug))
        content = None
        if is_number(slug):
            logger.info(slug)
            content = self.retrieve(int(slug))
        self.write(dumps(content))


def make_app():
    return web.Application([
        (r"/", MainHandler),
        (r"/pokemon", PokemonHandler),
        (r"/pokemon/([^/]+)", PokemonHandler),
        (r"/pokemon/page/([^/]+)", PokemonPageHandler),
        (r"/vote", VoteHandler),
        (r"/submit-nickname", NicknameHandler)
    ], db=db)

if __name__ == "__main__":
    port = 8888
    logger.info('Started API Server at port {}'.format(port))
    app = make_app()
    app.listen(port)
    ioloop.IOLoop.current().start()
