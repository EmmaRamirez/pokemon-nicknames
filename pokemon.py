import json

class Object:
    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class Pokemon:
    def __init__(self, species):
        self.pokemon = Object()
        self.pokemon.species = species
        self.pokemon.id = 25
        self.pokemon.nicknames = []
    
    def to_json(self):
        return self.pokemon.to_json()