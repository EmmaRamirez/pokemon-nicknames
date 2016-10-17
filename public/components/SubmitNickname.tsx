import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

require('../styles/submit-nickname.styl');

interface SubmitNicknameProps {

}

interface SubmitNicknameState {
  charactersRemaining: number;
}

class SubmitNickname extends React.Component<{}, SubmitNicknameState> {
  constructor(props) {
    super(props);
    this.state = {
      charactersRemaining: 200
    }
  }

  textAreaChange(event) {
    let input = event.target.value.length;
    let cr = 200 - input;
    this.setState({
      charactersRemaining: cr
    });
  }

  render() {
    return (
      <div className='submit-nickname-wrapper'>
        <h2>Submit Nickname</h2>
        <form action='' method='post' enctype='multipart/form-data' className='submit-nickname-form'>
          <label htmlFor='species'>
            <span>Species:</span>
            <select name='species'>
            <option value='Bulbasaur'>Bulbasaur</option>
<option value='Ivysaur'>Ivysaur</option>
<option value='Venusaur'>Venusaur</option>
<option value='Charmander'>Charmander</option>
<option value='Charmeleon'>Charmeleon</option>
<option value='Charizard'>Charizard</option>
<option value='Squirtle'>Squirtle</option>
<option value='Wartortle'>Wartortle</option>
<option value='Blastoise'>Blastoise</option>
<option value='Caterpie'>Caterpie</option>
<option value='Metapod'>Metapod</option>
<option value='Butterfree'>Butterfree</option>
<option value='Weedle'>Weedle</option>
<option value='Kakuna'>Kakuna</option>
<option value='Beedrill'>Beedrill</option>
<option value='Pidgey'>Pidgey</option>
<option value='Pidgeotto'>Pidgeotto</option>
<option value='Pidgeot'>Pidgeot</option>
<option value='Rattata'>Rattata</option>
<option value='Raticate'>Raticate</option>
<option value='Spearow'>Spearow</option>
<option value='Fearow'>Fearow</option>
<option value='Ekans'>Ekans</option>
<option value='Arbok'>Arbok</option>
<option value='Pikachu'>Pikachu</option>
<option value='Raichu'>Raichu</option>
<option value='Sandshrew'>Sandshrew</option>
<option value='Sandslash'>Sandslash</option>
<option value='Nidoran♀'>Nidoran♀</option>
<option value='Nidorina'>Nidorina</option>
<option value='Nidoqueen'>Nidoqueen</option>
<option value='Nidoran♂'>Nidoran♂</option>
<option value='Nidorino'>Nidorino</option>
<option value='Nidoking'>Nidoking</option>
<option value='Clefairy'>Clefairy</option>
<option value='Clefable'>Clefable</option>
<option value='Vulpix'>Vulpix</option>
<option value='Ninetales'>Ninetales</option>
<option value='Jigglypuff'>Jigglypuff</option>
<option value='Wigglytuff'>Wigglytuff</option>
<option value='Zubat'>Zubat</option>
<option value='Golbat'>Golbat</option>
<option value='Oddish'>Oddish</option>
<option value='Gloom'>Gloom</option>
<option value='Vileplume'>Vileplume</option>
<option value='Paras'>Paras</option>
<option value='Parasect'>Parasect</option>
<option value='Venonat'>Venonat</option>
<option value='Venomoth'>Venomoth</option>
<option value='Diglett'>Diglett</option>
<option value='Dugtrio'>Dugtrio</option>
<option value='Meowth'>Meowth</option>
<option value='Persian'>Persian</option>
<option value='Psyduck'>Psyduck</option>
<option value='Golduck'>Golduck</option>
<option value='Mankey'>Mankey</option>
<option value='Primeape'>Primeape</option>
<option value='Growlithe'>Growlithe</option>
<option value='Arcanine'>Arcanine</option>
<option value='Poliwag'>Poliwag</option>
<option value='Poliwhirl'>Poliwhirl</option>
<option value='Poliwrath'>Poliwrath</option>
<option value='Abra'>Abra</option>
<option value='Kadabra'>Kadabra</option>
<option value='Alakazam'>Alakazam</option>
<option value='Machop'>Machop</option>
<option value='Machoke'>Machoke</option>
<option value='Machamp'>Machamp</option>
<option value='Bellsprout'>Bellsprout</option>
<option value='Weepinbell'>Weepinbell</option>
<option value='Victreebel'>Victreebel</option>
<option value='Tentacool'>Tentacool</option>
<option value='Tentacruel'>Tentacruel</option>
<option value='Geodude'>Geodude</option>
<option value='Graveler'>Graveler</option>
<option value='Golem'>Golem</option>
<option value='Ponyta'>Ponyta</option>
<option value='Rapidash'>Rapidash</option>
<option value='Slowpoke'>Slowpoke</option>
<option value='Slowbro'>Slowbro</option>
<option value='Magnemite'>Magnemite</option>
<option value='Magneton'>Magneton</option>
<option value='Farfetchd'>Farfetch'd</option>
<option value='Doduo'>Doduo</option>
<option value='Dodrio'>Dodrio</option>
<option value='Seel'>Seel</option>
<option value='Dewgong'>Dewgong</option>
<option value='Grimer'>Grimer</option>
<option value='Muk'>Muk</option>
<option value='Shellder'>Shellder</option>
<option value='Cloyster'>Cloyster</option>
<option value='Gastly'>Gastly</option>
<option value='Haunter'>Haunter</option>
<option value='Gengar'>Gengar</option>
<option value='Onix'>Onix</option>
<option value='Drowzee'>Drowzee</option>
<option value='Hypno'>Hypno</option>
<option value='Krabby'>Krabby</option>
<option value='Kingler'>Kingler</option>
<option value='Voltorb'>Voltorb</option>
<option value='Electrode'>Electrode</option>
<option value='Exeggcute'>Exeggcute</option>
<option value='Exeggutor'>Exeggutor</option>
<option value='Cubone'>Cubone</option>
<option value='Marowak'>Marowak</option>
<option value='Hitmonlee'>Hitmonlee</option>
<option value='Hitmonchan'>Hitmonchan</option>
<option value='Lickitung'>Lickitung</option>
<option value='Koffing'>Koffing</option>
<option value='Weezing'>Weezing</option>
<option value='Rhyhorn'>Rhyhorn</option>
<option value='Rhydon'>Rhydon</option>
<option value='Chansey'>Chansey</option>
<option value='Tangela'>Tangela</option>
<option value='Kangaskhan'>Kangaskhan</option>
<option value='Horsea'>Horsea</option>
<option value='Seadra'>Seadra</option>
<option value='Goldeen'>Goldeen</option>
<option value='Seaking'>Seaking</option>
<option value='Staryu'>Staryu</option>
<option value='Starmie'>Starmie</option>
<option value='Mr. Mime'>Mr. Mime</option>
<option value='Scyther'>Scyther</option>
<option value='Jynx'>Jynx</option>
<option value='Electabuzz'>Electabuzz</option>
<option value='Magmar'>Magmar</option>
<option value='Pinsir'>Pinsir</option>
<option value='Tauros'>Tauros</option>
<option value='Magikarp'>Magikarp</option>
<option value='Gyarados'>Gyarados</option>
<option value='Lapras'>Lapras</option>
<option value='Ditto'>Ditto</option>
<option value='Eevee'>Eevee</option>
<option value='Vaporeon'>Vaporeon</option>
<option value='Jolteon'>Jolteon</option>
<option value='Flareon'>Flareon</option>
<option value='Porygon'>Porygon</option>
<option value='Omanyte'>Omanyte</option>
<option value='Omastar'>Omastar</option>
<option value='Kabuto'>Kabuto</option>
<option value='Kabutops'>Kabutops</option>
<option value='Aerodactyl'>Aerodactyl</option>
<option value='Snorlax'>Snorlax</option>
<option value='Articuno'>Articuno</option>
<option value='Zapdos'>Zapdos</option>
<option value='Moltres'>Moltres</option>
<option value='Dratini'>Dratini</option>
<option value='Dragonair'>Dragonair</option>
<option value='Dragonite'>Dragonite</option>
<option value='Mewtwo'>Mewtwo</option>
<option value='Mew'>Mew</option>
<option value='Chikorita'>Chikorita</option>
<option value='Bayleef'>Bayleef</option>
<option value='Meganium'>Meganium</option>
<option value='Cyndaquil'>Cyndaquil</option>
<option value='Quilava'>Quilava</option>
<option value='Typhlosion'>Typhlosion</option>
<option value='Totodile'>Totodile</option>
<option value='Croconaw'>Croconaw</option>
<option value='Feraligatr'>Feraligatr</option>
<option value='Sentret'>Sentret</option>
<option value='Furret'>Furret</option>
<option value='Hoothoot'>Hoothoot</option>
<option value='Noctowl'>Noctowl</option>
<option value='Ledyba'>Ledyba</option>
<option value='Ledian'>Ledian</option>
<option value='Spinarak'>Spinarak</option>
<option value='Ariados'>Ariados</option>
<option value='Crobat'>Crobat</option>
<option value='Chinchou'>Chinchou</option>
<option value='Lanturn'>Lanturn</option>
<option value='Pichu'>Pichu</option>
<option value='Cleffa'>Cleffa</option>
<option value='Igglybuff'>Igglybuff</option>
<option value='Togepi'>Togepi</option>
<option value='Togetic'>Togetic</option>
<option value='Natu'>Natu</option>
<option value='Xatu'>Xatu</option>
<option value='Mareep'>Mareep</option>
<option value='Flaaffy'>Flaaffy</option>
<option value='Ampharos'>Ampharos</option>
<option value='Bellossom'>Bellossom</option>
<option value='Marill'>Marill</option>
<option value='Azumarill'>Azumarill</option>
<option value='Sudowoodo'>Sudowoodo</option>
<option value='Politoed'>Politoed</option>
<option value='Hoppip'>Hoppip</option>
<option value='Skiploom'>Skiploom</option>
<option value='Jumpluff'>Jumpluff</option>
<option value='Aipom'>Aipom</option>
<option value='Sunkern'>Sunkern</option>
<option value='Sunflora'>Sunflora</option>
<option value='Yanma'>Yanma</option>
<option value='Wooper'>Wooper</option>
<option value='Quagsire'>Quagsire</option>
<option value='Espeon'>Espeon</option>
<option value='Umbreon'>Umbreon</option>
<option value='Murkrow'>Murkrow</option>
<option value='Slowking'>Slowking</option>
<option value='Misdreavus'>Misdreavus</option>
<option value='Unown'>Unown</option>
<option value='Wobbuffet'>Wobbuffet</option>
<option value='Girafarig'>Girafarig</option>
<option value='Pineco'>Pineco</option>
<option value='Forretress'>Forretress</option>
<option value='Dunsparce'>Dunsparce</option>
<option value='Gligar'>Gligar</option>
<option value='Steelix'>Steelix</option>
<option value='Snubbull'>Snubbull</option>
<option value='Granbull'>Granbull</option>
<option value='Qwilfish'>Qwilfish</option>
<option value='Scizor'>Scizor</option>
<option value='Shuckle'>Shuckle</option>
<option value='Heracross'>Heracross</option>
<option value='Sneasel'>Sneasel</option>
<option value='Teddiursa'>Teddiursa</option>
<option value='Ursaring'>Ursaring</option>
<option value='Slugma'>Slugma</option>
<option value='Magcargo'>Magcargo</option>
<option value='Swinub'>Swinub</option>
<option value='Piloswine'>Piloswine</option>
<option value='Corsola'>Corsola</option>
<option value='Remoraid'>Remoraid</option>
<option value='Octillery'>Octillery</option>
<option value='Delibird'>Delibird</option>
<option value='Mantine'>Mantine</option>
<option value='Skarmory'>Skarmory</option>
<option value='Houndour'>Houndour</option>
<option value='Houndoom'>Houndoom</option>
<option value='Kingdra'>Kingdra</option>
<option value='Phanpy'>Phanpy</option>
<option value='Donphan'>Donphan</option>
<option value='Porygon2'>Porygon2</option>
<option value='Stantler'>Stantler</option>
<option value='Smeargle'>Smeargle</option>
<option value='Tyrogue'>Tyrogue</option>
<option value='Hitmontop'>Hitmontop</option>
<option value='Smoochum'>Smoochum</option>
<option value='Elekid'>Elekid</option>
<option value='Magby'>Magby</option>
<option value='Miltank'>Miltank</option>
<option value='Blissey'>Blissey</option>
<option value='Raikou'>Raikou</option>
<option value='Entei'>Entei</option>
<option value='Suicune'>Suicune</option>
<option value='Larvitar'>Larvitar</option>
<option value='Pupitar'>Pupitar</option>
<option value='Tyranitar'>Tyranitar</option>
<option value='Lugia'>Lugia</option>
<option value='Ho-Oh'>Ho-Oh</option>
<option value='Celebi'>Celebi</option>
<option value='Treecko'>Treecko</option>
<option value='Grovyle'>Grovyle</option>
<option value='Sceptile'>Sceptile</option>
<option value='Torchic'>Torchic</option>
<option value='Combusken'>Combusken</option>
<option value='Blaziken'>Blaziken</option>
<option value='Mudkip'>Mudkip</option>
<option value='Marshtomp'>Marshtomp</option>
<option value='Swampert'>Swampert</option>
<option value='Poochyena'>Poochyena</option>
<option value='Mightyena'>Mightyena</option>
<option value='Zigzagoon'>Zigzagoon</option>
<option value='Linoone'>Linoone</option>
<option value='Wurmple'>Wurmple</option>
<option value='Silcoon'>Silcoon</option>
<option value='Beautifly'>Beautifly</option>
<option value='Cascoon'>Cascoon</option>
<option value='Dustox'>Dustox</option>
<option value='Lotad'>Lotad</option>
<option value='Lombre'>Lombre</option>
<option value='Ludicolo'>Ludicolo</option>
<option value='Seedot'>Seedot</option>
<option value='Nuzleaf'>Nuzleaf</option>
<option value='Shiftry'>Shiftry</option>
<option value='Taillow'>Taillow</option>
<option value='Swellow'>Swellow</option>
<option value='Wingull'>Wingull</option>
<option value='Pelipper'>Pelipper</option>
<option value='Ralts'>Ralts</option>
<option value='Kirlia'>Kirlia</option>
<option value='Gardevoir'>Gardevoir</option>
<option value='Surskit'>Surskit</option>
<option value='Masquerain'>Masquerain</option>
<option value='Shroomish'>Shroomish</option>
<option value='Breloom'>Breloom</option>
<option value='Slakoth'>Slakoth</option>
<option value='Vigoroth'>Vigoroth</option>
<option value='Slaking'>Slaking</option>
<option value='Nincada'>Nincada</option>
<option value='Ninjask'>Ninjask</option>
<option value='Shedinja'>Shedinja</option>
<option value='Whismur'>Whismur</option>
<option value='Loudred'>Loudred</option>
<option value='Exploud'>Exploud</option>
<option value='Makuhita'>Makuhita</option>
<option value='Hariyama'>Hariyama</option>
<option value='Azurill'>Azurill</option>
<option value='Nosepass'>Nosepass</option>
<option value='Skitty'>Skitty</option>
<option value='Delcatty'>Delcatty</option>
<option value='Sableye'>Sableye</option>
<option value='Mawile'>Mawile</option>
<option value='Aron'>Aron</option>
<option value='Lairon'>Lairon</option>
<option value='Aggron'>Aggron</option>
<option value='Meditite'>Meditite</option>
<option value='Medicham'>Medicham</option>
<option value='Electrike'>Electrike</option>
<option value='Manectric'>Manectric</option>
<option value='Plusle'>Plusle</option>
<option value='Minun'>Minun</option>
<option value='Volbeat'>Volbeat</option>
<option value='Illumise'>Illumise</option>
<option value='Roselia'>Roselia</option>
<option value='Gulpin'>Gulpin</option>
<option value='Swalot'>Swalot</option>
<option value='Carvanha'>Carvanha</option>
<option value='Sharpedo'>Sharpedo</option>
<option value='Wailmer'>Wailmer</option>
<option value='Wailord'>Wailord</option>
<option value='Numel'>Numel</option>
<option value='Camerupt'>Camerupt</option>
<option value='Torkoal'>Torkoal</option>
<option value='Spoink'>Spoink</option>
<option value='Grumpig'>Grumpig</option>
<option value='Spinda'>Spinda</option>
<option value='Trapinch'>Trapinch</option>
<option value='Vibrava'>Vibrava</option>
<option value='Flygon'>Flygon</option>
<option value='Cacnea'>Cacnea</option>
<option value='Cacturne'>Cacturne</option>
<option value='Swablu'>Swablu</option>
<option value='Altaria'>Altaria</option>
<option value='Zangoose'>Zangoose</option>
<option value='Seviper'>Seviper</option>
<option value='Lunatone'>Lunatone</option>
<option value='Solrock'>Solrock</option>
<option value='Barboach'>Barboach</option>
<option value='Whiscash'>Whiscash</option>
<option value='Corphish'>Corphish</option>
<option value='Crawdaunt'>Crawdaunt</option>
<option value='Baltoy'>Baltoy</option>
<option value='Claydol'>Claydol</option>
<option value='Lileep'>Lileep</option>
<option value='Cradily'>Cradily</option>
<option value='Anorith'>Anorith</option>
<option value='Armaldo'>Armaldo</option>
<option value='Feebas'>Feebas</option>
<option value='Milotic'>Milotic</option>
<option value='Castform'>Castform</option>
<option value='Kecleon'>Kecleon</option>
<option value='Shuppet'>Shuppet</option>
<option value='Banette'>Banette</option>
<option value='Duskull'>Duskull</option>
<option value='Dusclops'>Dusclops</option>
<option value='Tropius'>Tropius</option>
<option value='Chimecho'>Chimecho</option>
<option value='Absol'>Absol</option>
<option value='Wynaut'>Wynaut</option>
<option value='Snorunt'>Snorunt</option>
<option value='Glalie'>Glalie</option>
<option value='Spheal'>Spheal</option>
<option value='Sealeo'>Sealeo</option>
<option value='Walrein'>Walrein</option>
<option value='Clamperl'>Clamperl</option>
<option value='Huntail'>Huntail</option>
<option value='Gorebyss'>Gorebyss</option>
<option value='Relicanth'>Relicanth</option>
<option value='Luvdisc'>Luvdisc</option>
<option value='Bagon'>Bagon</option>
<option value='Shelgon'>Shelgon</option>
<option value='Salamence'>Salamence</option>
<option value='Beldum'>Beldum</option>
<option value='Metang'>Metang</option>
<option value='Metagross'>Metagross</option>
<option value='Regirock'>Regirock</option>
<option value='Regice'>Regice</option>
<option value='Registeel'>Registeel</option>
<option value='Latias'>Latias</option>
<option value='Latios'>Latios</option>
<option value='Kyogre'>Kyogre</option>
<option value='Groudon'>Groudon</option>
<option value='Rayquaza'>Rayquaza</option>
<option value='Jirachi'>Jirachi</option>
<option value='Deoxys'>Deoxys</option>
<option value='Turtwig'>Turtwig</option>
<option value='Grotle'>Grotle</option>
<option value='Torterra'>Torterra</option>
<option value='Chimchar'>Chimchar</option>
<option value='Monferno'>Monferno</option>
<option value='Infernape'>Infernape</option>
<option value='Piplup'>Piplup</option>
<option value='Prinplup'>Prinplup</option>
<option value='Empoleon'>Empoleon</option>
<option value='Starly'>Starly</option>
<option value='Staravia'>Staravia</option>
<option value='Staraptor'>Staraptor</option>
<option value='Bidoof'>Bidoof</option>
<option value='Bibarel'>Bibarel</option>
<option value='Kricketot'>Kricketot</option>
<option value='Kricketune'>Kricketune</option>
<option value='Shinx'>Shinx</option>
<option value='Luxio'>Luxio</option>
<option value='Luxray'>Luxray</option>
<option value='Budew'>Budew</option>
<option value='Roserade'>Roserade</option>
<option value='Cranidos'>Cranidos</option>
<option value='Rampardos'>Rampardos</option>
<option value='Shieldon'>Shieldon</option>
<option value='Bastiodon'>Bastiodon</option>
<option value='Burmy'>Burmy</option>
<option value='Wormadam'>Wormadam</option>
<option value='Mothim'>Mothim</option>
<option value='Combee'>Combee</option>
<option value='Vespiquen'>Vespiquen</option>
<option value='Pachirisu'>Pachirisu</option>
<option value='Buizel'>Buizel</option>
<option value='Floatzel'>Floatzel</option>
<option value='Cherubi'>Cherubi</option>
<option value='Cherrim'>Cherrim</option>
<option value='Shellos'>Shellos</option>
<option value='Gastrodon'>Gastrodon</option>
<option value='Ambipom'>Ambipom</option>
<option value='Drifloon'>Drifloon</option>
<option value='Drifblim'>Drifblim</option>
<option value='Buneary'>Buneary</option>
<option value='Lopunny'>Lopunny</option>
<option value='Mismagius'>Mismagius</option>
<option value='Honchkrow'>Honchkrow</option>
<option value='Glameow'>Glameow</option>
<option value='Purugly'>Purugly</option>
<option value='Chingling'>Chingling</option>
<option value='Stunky'>Stunky</option>
<option value='Skuntank'>Skuntank</option>
<option value='Bronzor'>Bronzor</option>
<option value='Bronzong'>Bronzong</option>
<option value='Bonsly'>Bonsly</option>
<option value='Mime Jr.'>Mime Jr.</option>
<option value='Happiny'>Happiny</option>
<option value='Chatot'>Chatot</option>
<option value='Spiritomb'>Spiritomb</option>
<option value='Gible'>Gible</option>
<option value='Gabite'>Gabite</option>
<option value='Garchomp'>Garchomp</option>
<option value='Munchlax'>Munchlax</option>
<option value='Riolu'>Riolu</option>
<option value='Lucario'>Lucario</option>
<option value='Hippopotas'>Hippopotas</option>
<option value='Hippowdon'>Hippowdon</option>
<option value='Skorupi'>Skorupi</option>
<option value='Drapion'>Drapion</option>
<option value='Croagunk'>Croagunk</option>
<option value='Toxicroak'>Toxicroak</option>
<option value='Carnivine'>Carnivine</option>
<option value='Finneon'>Finneon</option>
<option value='Lumineon'>Lumineon</option>
<option value='Mantyke'>Mantyke</option>
<option value='Snover'>Snover</option>
<option value='Abomasnow'>Abomasnow</option>
<option value='Weavile'>Weavile</option>
<option value='Magnezone'>Magnezone</option>
<option value='Lickilicky'>Lickilicky</option>
<option value='Rhyperior'>Rhyperior</option>
<option value='Tangrowth'>Tangrowth</option>
<option value='Electivire'>Electivire</option>
<option value='Magmortar'>Magmortar</option>
<option value='Togekiss'>Togekiss</option>
<option value='Yanmega'>Yanmega</option>
<option value='Leafeon'>Leafeon</option>
<option value='Glaceon'>Glaceon</option>
<option value='Gliscor'>Gliscor</option>
<option value='Mamoswine'>Mamoswine</option>
<option value='Porygon-Z'>Porygon-Z</option>
<option value='Gallade'>Gallade</option>
<option value='Probopass'>Probopass</option>
<option value='Dusknoir'>Dusknoir</option>
<option value='Froslass'>Froslass</option>
<option value='Rotom'>Rotom</option>
<option value='Uxie'>Uxie</option>
<option value='Mesprit'>Mesprit</option>
<option value='Azelf'>Azelf</option>
<option value='Dialga'>Dialga</option>
<option value='Palkia'>Palkia</option>
<option value='Heatran'>Heatran</option>
<option value='Regigigas'>Regigigas</option>
<option value='Giratina'>Giratina</option>
<option value='Cresselia'>Cresselia</option>
<option value='Phione'>Phione</option>
<option value='Manaphy'>Manaphy</option>
<option value='Darkrai'>Darkrai</option>
<option value='Shaymin'>Shaymin</option>
<option value='Arceus'>Arceus</option>
<option value='Victini'>Victini</option>
<option value='Snivy'>Snivy</option>
<option value='Servine'>Servine</option>
<option value='Serperior'>Serperior</option>
<option value='Tepig'>Tepig</option>
<option value='Pignite'>Pignite</option>
<option value='Emboar'>Emboar</option>
<option value='Oshawott'>Oshawott</option>
<option value='Dewott'>Dewott</option>
<option value='Samurott'>Samurott</option>
<option value='Patrat'>Patrat</option>
<option value='Watchog'>Watchog</option>
<option value='Lillipup'>Lillipup</option>
<option value='Herdier'>Herdier</option>
<option value='Stoutland'>Stoutland</option>
<option value='Purrloin'>Purrloin</option>
<option value='Liepard'>Liepard</option>
<option value='Pansage'>Pansage</option>
<option value='Simisage'>Simisage</option>
<option value='Pansear'>Pansear</option>
<option value='Simisear'>Simisear</option>
<option value='Panpour'>Panpour</option>
<option value='Simipour'>Simipour</option>
<option value='Munna'>Munna</option>
<option value='Musharna'>Musharna</option>
<option value='Pidove'>Pidove</option>
<option value='Tranquill'>Tranquill</option>
<option value='Unfezant'>Unfezant</option>
<option value='Blitzle'>Blitzle</option>
<option value='Zebstrika'>Zebstrika</option>
<option value='Roggenrola'>Roggenrola</option>
<option value='Boldore'>Boldore</option>
<option value='Gigalith'>Gigalith</option>
<option value='Woobat'>Woobat</option>
<option value='Swoobat'>Swoobat</option>
<option value='Drilbur'>Drilbur</option>
<option value='Excadrill'>Excadrill</option>
<option value='Audino'>Audino</option>
<option value='Timburr'>Timburr</option>
<option value='Gurdurr'>Gurdurr</option>
<option value='Conkeldurr'>Conkeldurr</option>
<option value='Tympole'>Tympole</option>
<option value='Palpitoad'>Palpitoad</option>
<option value='Seismitoad'>Seismitoad</option>
<option value='Throh'>Throh</option>
<option value='Sawk'>Sawk</option>
<option value='Sewaddle'>Sewaddle</option>
<option value='Swadloon'>Swadloon</option>
<option value='Leavanny'>Leavanny</option>
<option value='Venipede'>Venipede</option>
<option value='Whirlipede'>Whirlipede</option>
<option value='Scolipede'>Scolipede</option>
<option value='Cottonee'>Cottonee</option>
<option value='Whimsicott'>Whimsicott</option>
<option value='Petilil'>Petilil</option>
<option value='Lilligant'>Lilligant</option>
<option value='Basculin'>Basculin</option>
<option value='Sandile'>Sandile</option>
<option value='Krokorok'>Krokorok</option>
<option value='Krookodile'>Krookodile</option>
<option value='Darumaka'>Darumaka</option>
<option value='Darmanitan'>Darmanitan</option>
<option value='Maractus'>Maractus</option>
<option value='Dwebble'>Dwebble</option>
<option value='Crustle'>Crustle</option>
<option value='Scraggy'>Scraggy</option>
<option value='Scrafty'>Scrafty</option>
<option value='Sigilyph'>Sigilyph</option>
<option value='Yamask'>Yamask</option>
<option value='Cofagrigus'>Cofagrigus</option>
<option value='Tirtouga'>Tirtouga</option>
<option value='Carracosta'>Carracosta</option>
<option value='Archen'>Archen</option>
<option value='Archeops'>Archeops</option>
<option value='Trubbish'>Trubbish</option>
<option value='Garbodor'>Garbodor</option>
        <option value='Zorua'>Zorua</option>
        <option value='Zoroark'>Zoroark</option>
        <option value='Minccino'>Minccino</option>
        <option value='Cinccino'>Cinccino</option>
        <option value='Gothita'>Gothita</option>
        <option value='Gothorita'>Gothorita</option>
        <option value='Gothitelle'>Gothitelle</option>
        <option value='Solosis'>Solosis</option>
        <option value='Duosion'>Duosion</option>
        <option value='Reuniclus'>Reuniclus</option>
        <option value='Ducklett'>Ducklett</option>
        <option value='Swanna'>Swanna</option>
        <option value='Vanillite'>Vanillite</option>
        <option value='Vanillish'>Vanillish</option>
        <option value='Vanilluxe'>Vanilluxe</option>
        <option value='Deerling'>Deerling</option>
        <option value='Sawsbuck'>Sawsbuck</option>
        <option value='Emolga'>Emolga</option>
        <option value='Karrablast'>Karrablast</option>
        <option value='Escavalier'>Escavalier</option>
        <option value='Foongus'>Foongus</option>
        <option value='Amoonguss'>Amoonguss</option>
        <option value='Frillish'>Frillish</option>
        <option value='Jellicent'>Jellicent</option>
        <option value='Alomomola'>Alomomola</option>
        <option value='Joltik'>Joltik</option>
        <option value='Galvantula'>Galvantula</option>
        <option value='Ferroseed'>Ferroseed</option>
        <option value='Ferrothorn'>Ferrothorn</option>
        <option value='Klink'>Klink</option>
        <option value='Klang'>Klang</option>
        <option value='Klinklang'>Klinklang</option>
        <option value='Tynamo'>Tynamo</option>
        <option value='Eelektrik'>Eelektrik</option>
        <option value='Eelektross'>Eelektross</option>
        <option value='Elgyem'>Elgyem</option>
        <option value='Beheeyem'>Beheeyem</option>
        <option value='Litwick'>Litwick</option>
        <option value='Lampent'>Lampent</option>
        <option value='Chandelure'>Chandelure</option>
        <option value='Axew'>Axew</option>
        <option value='Fraxure'>Fraxure</option>
        <option value='Haxorus'>Haxorus</option>
        <option value='Cubchoo'>Cubchoo</option>
        <option value='Beartic'>Beartic</option>
        <option value='Cryogonal'>Cryogonal</option>
        <option value='Shelmet'>Shelmet</option>
        <option value='Accelgor'>Accelgor</option>
        <option value='Stunfisk'>Stunfisk</option>
        <option value='Mienfoo'>Mienfoo</option>
        <option value='Mienshao'>Mienshao</option>
        <option value='Druddigon'>Druddigon</option>
        <option value='Golett'>Golett</option>
        <option value='Golurk'>Golurk</option>
        <option value='Pawniard'>Pawniard</option>
        <option value='Bisharp'>Bisharp</option>
        <option value='Bouffalant'>Bouffalant</option>
        <option value='Rufflet'>Rufflet</option>
        <option value='Braviary'>Braviary</option>
        <option value='Vullaby'>Vullaby</option>
        <option value='Mandibuzz'>Mandibuzz</option>
        <option value='Heatmor'>Heatmor</option>
        <option value='Durant'>Durant</option>
        <option value='Deino'>Deino</option>
        <option value='Zweilous'>Zweilous</option>
        <option value='Hydreigon'>Hydreigon</option>
        <option value='Larvesta'>Larvesta</option>
        <option value='Volcarona'>Volcarona</option>
        <option value='Cobalion'>Cobalion</option>
        <option value='Terrakion'>Terrakion</option>
        <option value='Virizion'>Virizion</option>
        <option value='Tornadus'>Tornadus</option>
        <option value='Thundurus'>Thundurus</option>
        <option value='Reshiram'>Reshiram</option>
        <option value='Zekrom'>Zekrom</option>
        <option value='Landorus'>Landorus</option>
        <option value='Kyurem'>Kyurem</option>
        <option value='Keldeo'>Keldeo</option>
        <option value='Meloetta'>Meloetta</option>
        <option value='Genesect'>Genesect</option>
        <option value='Chespin'>Chespin</option>
        <option value='Quilladin'>Quilladin</option>
        <option value='Chesnaught'>Chesnaught</option>
        <option value='Fennekin'>Fennekin</option>
        <option value='Braixen'>Braixen</option>
        <option value='Delphox'>Delphox</option>
        <option value='Froakie'>Froakie</option>
        <option value='Frogadier'>Frogadier</option>
        <option value='Greninja'>Greninja</option>
        <option value='Bunnelby'>Bunnelby</option>
        <option value='Diggersby'>Diggersby</option>
        <option value='Fletchling'>Fletchling</option>
        <option value='Fletchinder'>Fletchinder</option>
        <option value='Talonflame'>Talonflame</option>
        <option value='Scatterbug'>Scatterbug</option>
        <option value='Spewpa'>Spewpa</option>
        <option value='Vivillon'>Vivillon</option>
        <option value='Litleo'>Litleo</option>
        <option value='Pyroar'>Pyroar</option>
        <option value='Flabébé'>Flabébé</option>
        <option value='Floette'>Floette</option>
        <option value='Florges'>Florges</option>
        <option value='Skiddo'>Skiddo</option>
        <option value='Gogoat'>Gogoat</option>
        <option value='Pancham'>Pancham</option>
        <option value='Pangoro'>Pangoro</option>
        <option value='Furfrou'>Furfrou</option>
        <option value='Espurr'>Espurr</option>
        <option value='Meowstic'>Meowstic</option>
        <option value='Honedge'>Honedge</option>
        <option value='Doublade'>Doublade</option>
        <option value='Aegislash'>Aegislash</option>
        <option value='Spritzee'>Spritzee</option>
        <option value='Aromatisse'>Aromatisse</option>
        <option value='Swirlix'>Swirlix</option>
        <option value='Slurpuff'>Slurpuff</option>
        <option value='Inkay'>Inkay</option>
        <option value='Malamar'>Malamar</option>
        <option value='Binacle'>Binacle</option>
        <option value='Barbaracle'>Barbaracle</option>
        <option value='Skrelp'>Skrelp</option>
        <option value='Dragalge'>Dragalge</option>
        <option value='Clauncher'>Clauncher</option>
        <option value='Clawitzer'>Clawitzer</option>
        <option value='Helioptile'>Helioptile</option>
        <option value='Heliolisk'>Heliolisk</option>
        <option value='Tyrunt'>Tyrunt</option>
        <option value='Tyrantrum'>Tyrantrum</option>
        <option value='Amaura'>Amaura</option>
        <option value='Aurorus'>Aurorus</option>
        <option value='Sylveon'>Sylveon</option>
        <option value='Hawlucha'>Hawlucha</option>
              <option value='Dedenne'>Dedenne</option>
              <option value='Carbink'>Carbink</option>
              <option value='Goomy'>Goomy</option>
              <option value='Sliggoo'>Sliggoo</option>
              <option value='Goodra'>Goodra</option>
              <option value='Klefki'>Klefki</option>
              <option value='Phantump'>Phantump</option>
              <option value='Trevenant'>Trevenant</option>
              <option value='Pumpkaboo'>Pumpkaboo</option>
              <option value='Gourgeist'>Gourgeist</option>
              <option value='Bergmite'>Bergmite</option>
              <option value='Avalugg'>Avalugg</option>
              <option value='Noibat'>Noibat</option>
              <option value='Noivern'>Noivern</option>
              <option value='Xerneas'>Xerneas</option>
              <option value='Yveltal'>Yveltal</option>
              <option value='Zygarde'>Zygarde</option>
              <option value='Diancie'>Diancie</option>
              <option value='Hoopa'>Hoopa</option>
              <option value='Volcanion'>Volcanion</option>
            </select>
          </label>
          <label htmlFor='nickname'>
            <span>Nickname: </span>
            <input required='required' type='text' name='nickname' defaultValue='' />
          </label>
          <label htmlFor='description'>
            <span>Description: </span>
            <textarea required='required' onChange={ this.textAreaChange.bind(this) } name='description'></textarea><br/>
            <span className='tiny-text'>{this.state.charactersRemaining} characters remaining</span>
          </label>
          <label htmlFor='tags'>
            <span>Tags: </span>
            <input type='text' name='tags' defaultValue='' />
            <span className='tiny-text'>comma seperated</span>
          </label>
          <input className='submit-button' type='submit' value='submit' />
        </form>
      </div>
    )
  }
}

export default SubmitNickname;
