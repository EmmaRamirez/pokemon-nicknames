import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonNicknameComponent } from './pokemon-nickname/pokemon-nickname.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NicknameVoteComponent } from './nickname-vote/nickname-vote.component';
import { NicknameSubmitComponent } from './nickname-submit/nickname-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonComponent,
    PokemonNicknameComponent,
    NicknameComponent,
    NicknameVoteComponent,
    NicknameSubmitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
