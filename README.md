# Pokemon Nicknames

[Website](http://pokemonnicknames.com)


![Travis](https://img.shields.io/travis/EmmaRamirez/pokemon-nicknames.svg?style=flat-square) ![GitHub release](https://img.shields.io/github/release/qubyte/rubidium.svg?style=flat-square)



## Installation

Dependencies: Python3, @angular/cli

After git cloning this repo, run `npm i`. On the first pass-through, this will build the app using the angular cli. You'll then want to run `python3 main.py` to get the app running.

You'll also need the following environmental variables (with actual values) declared in an .env file

```javascript
DB_USER="user"
DB_PASS="pass"
HOST="something.mlab.com"
DB_PORT=64785
PORT=8888
```

## API

The Pokémon schema is as follows:

```typescript
{
  id: string; // Pokemon's dex No
  species: string;
  nicknames: [
    {
      name: string; // nickname
      description: string;
      tags: string[];
      upvotes: number;
      downvotes: number;
    }
  ]
}
```

### `/pokemon/page/{n}`

> GET

Returns an array of 30 Pokémon, sorted into pages. For example, page 1 returns Pokémon 1-30, and page 2 returns Pokémon 31-60, etc.

### `/pokemon/{species}`

> GET

Returns a Pokémon object that matches the species requested.

### `/pokemon/search?species={string}`

> GET

Returns an array of Pokémon that _start with_ the species string;

### `/submit-nickname`

> POST

Writes a nickname to the database. Requires formData that conforms to the following schema:

```typescript
{
  species: string;
  nickname: string;
  description?: string;
  tags?: string;
}
```

Returns:

```typescript
{
  result: {
    document: Pokemon,
    nickname: {
      name: string;
      description: string;
      tags: string[];
      upvotes: 1;
      downvotes: 0;
    }
  }
}

```

Notice that upvotes and downvotes are static for newly created nicknames. A result with contain an error if a nickname with that name already exists for that species.


## Legal

I don't own Pokemon, Nintendo, or any other associated entities. All rights belong to their respective parties, including The Pokemon Company International and Nintendo. This application itself independent of copyrighted content is licensed under MIT.
