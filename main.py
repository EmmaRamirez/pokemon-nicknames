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

class NicknameHandler(web.RequestHandler):
    def get(self):
        pass

    def post(self):
        pass

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
