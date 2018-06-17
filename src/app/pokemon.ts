import { Nickname } from './nickname';

export class Pokemon {
  id: string;
  nicknames: Array<Nickname>;
  species: string;
  _id?: { $oid: string };
}
