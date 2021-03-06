import json
import logging
import os
from pymongo import MongoClient, ReturnDocument
from bson.json_util import dumps
from datetime import date
from tornado import web, escape, ioloop, httpclient, gen
from dotenv import load_dotenv
from os.path import join, dirname

dotenv_path = join(dirname(__file__), '.env')
load_dotenv(dotenv_path)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('api')

DB_USER = os.getenv('DB_USER')
DB_PASS = os.getenv('DB_PASS')
HOST = os.getenv('HOST')
PORT = os.getenv('DB_PORT')

connectionstring = 'mongodb://%s:%s@%s:%s/pokemon-nicknames' % (DB_USER, DB_PASS, HOST, PORT)

logger.info(connectionstring)

client = MongoClient(connectionstring)
db = client['pokemon-nicknames']

class MainHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self):
        self.redirect('/index.html')
        return

    def options(self):
      self.set_status(204)
      self.finish()

class VoteHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def post(self):
        species = self.get_argument('species')
        nickname = self.get_argument('nickname')

        document = db.pokemon.find_one({ 'species': species })
        self.write({
          'result': 'Votes updated'
        })


class NicknameHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def post(self):
        species = self.get_argument('species')
        nickname = self.get_argument('nickname')
        description = self.get_argument('description')
        tags = self.get_argument('tags')
        nick = {
          'name': nickname,
          'description': description,
          'tags': list(map(lambda x: x.lower(), tags.split(','))),
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
        else:
            db.pokemon.update_one({
                'species': species
            }, {
                '$push': { 'nicknames': nick }
            })
            self.write({
              'result': {
                'document': dumps(document),
                'nickname': nick
              }
            })

def is_number(s):
  try:
    float(s)
    return True
  except ValueError:
    return False

class SearchHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def get(self, slug=None):
        species = self.get_argument("species")
        document = db.pokemon.find({ 'species': { '$regex': '(^' + species + ')' }}).sort("id")
        self.write(dumps(document))

class PokemonHandler(web.RequestHandler):
    def set_default_headers(self):
        logger.info('Setting headers...')
        self.set_header("Access-Control-Allow-Origin", "*")
        self.set_header("Access-Control-Allow-Headers", "x-requested-with")
        self.set_header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS')

    def find_one_species(self, species):
        document = db.pokemon.find_one({ 'species': species })
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
            self.write({ 'error': 'Could not find matching species' })
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
        (r"/pokemon/search", SearchHandler),
        # (r"/pokemon", PokemonHandler),
        (r"/pokemon/([^/]+)", PokemonHandler),
        (r"/pokemon/page/([^/]+)", PokemonPageHandler),
        (r"/vote", VoteHandler),
        (r"/submit-nickname", NicknameHandler),
        (r"/(.*)", web.StaticFileHandler, { 'path': 'dist/pokemon-nicknames' }),
    ], db=db)

if __name__ == "__main__":
    port = os.getenv('PORT')
    logger.info('Started API Server at port {}'.format(port))
    app = make_app()
    app.listen(port)
    ioloop.IOLoop.current().start()
