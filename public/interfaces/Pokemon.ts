import Nickname from './Nickname';

interface Pokemon {
  species: string;
  id: string;
  nicknames: Nickname[];
}

export default Pokemon;
