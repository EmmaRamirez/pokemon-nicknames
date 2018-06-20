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
  MatAutocompleteModule,
  MatInputModule,
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { AdminComponent } from './admin/admin.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonNicknameComponent,
    NicknameComponent,
    NicknameVoteComponent,
    NicknameSubmitComponent,
    ControlsComponent,
    PokemonContainerComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDividerModule,
    AppRoutingModule,
  ],
  providers: [ WINDOW_PROVIDERS ],
  bootstrap: [AppComponent]
})
export class AppModule { }
