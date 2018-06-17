import json
import status
from pymongo import MongoClient
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
    def get(self):
        message = "Pokemon Nicknames Service v1"
        db=self.settings['db']
        logger.info(message)
        self.write(message)

class VoteHandler(web.RequestHandler):
    def get(self):
        pass

    def post(self):
        pass

class NicknameHandler(web.RequestHandler):
    def get(self):
        pass

    def post(self):
        pass

# Pokemon.findOne({ 'species': req.body.species }, function (err, pokemon) {
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

def is_number(s):
  try:
    float(s)
    return True
  except ValueError:
    return False


class PokemonHandler(web.RequestHandler):

    def find_one_species(self, species):
        document = db.pokemon.find_one({ 'species': species })
        return document

    def find_one_id(self, id):
        document = db.pokemon.find_one({ 'id': id })
        return document

    def get(self, slug=None):
        logger.info('requested {}'.format(slug))
        entry = None
        d = None
        if is_number(slug):
          entry = slug
          d = self.find_one_id(id=entry)
        else:
          if slug is not None:
              entry = slug.capitalize()
          else:
              entry = 'Pikachu'
        d = self.find_one_species(species=entry)
        self.write(dumps(d))


def make_app():
    return web.Application([
        (r"/", MainHandler),
        (r"/pokemon", PokemonHandler),
        (r"/pokemon/([^/]+)", PokemonHandler),
        (r"/vote", VoteHandler),
        (r"/submit-nickname", NicknameHandler)
    ], db=db)

if __name__ == "__main__":
    port = 8888
    logger.info('Started API Server at port {}'.format(port))
    app = make_app()
    app.listen(port)
    ioloop.IOLoop.current().start()
