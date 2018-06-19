import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppComponent } from './app.component';
import { Pokemon } from './pokemon';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  // {
  //   path: 'pokemon', component: PokemonComponent,
  // },
  // {
  //   path: 'pokemon/:id', component: PokemonComponent
  // }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
