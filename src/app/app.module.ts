import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatGridListModule,
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatDividerModule,
  MatInputModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { WINDOW_PROVIDERS, WINDOW } from './window.service';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonNicknameComponent } from './pokemon-nickname/pokemon-nickname.component';
import { NicknameComponent } from './nickname/nickname.component';
import { NicknameVoteComponent } from './nickname-vote/nickname-vote.component';
import { NicknameSubmitComponent } from './nickname-submit/nickname-submit.component';
import { AppRoutingModule } from './/app-routing.module';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonNicknameComponent,
    NicknameComponent,
    NicknameVoteComponent,
    NicknameSubmitComponent,
    ControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatDividerModule,
    AppRoutingModule,
  ],
  exports: [
    MatButtonModule
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
