import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCardModule, MatGridListModule, MatButtonModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonNicknameComponent } from './pokemon-nickname/pokemon-nickname.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NicknameVoteComponent } from './nickname-vote/nickname-vote.component';
import { NicknameSubmitComponent } from './nickname-submit/nickname-submit.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonNicknameComponent,
    NicknameComponent,
    NicknameVoteComponent,
    NicknameSubmitComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule
  ],
  exports: [
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
