# interface Nickname {
#   name: string;
#   description: string;
#   upvotes: number;
#   downvotes: number;
#   tags: string[];
#   isRealNickname?: boolean;
# }

import json

class Object:
    def to_json(self):
        return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True, indent=4)

class Nickname:
    def __init__(self, name, description, upvotes, downvotes, tags):
        self.nickname = Object()
        self.nickname.name = name
        self.nickname.description = description
        self.nickname.upvotes = upvotes
        self.nickname.downvotes = downvotes
        self.nickname.tags = tags
    
    def to_json(self):
        return self.nickname.to_json()
