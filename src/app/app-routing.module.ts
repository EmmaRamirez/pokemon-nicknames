import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { AppComponent } from './app.component';
import { Pokemon } from './pokemon';
import { NicknameSubmitComponent } from './nickname-submit/nickname-submit.component';
import { PokemonContainerComponent } from './pokemon-container/pokemon-container.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '', component: PokemonContainerComponent
  },
  {
    path: 'submit', component: NicknameSubmitComponent
  },
  {
    path: 'submit/:id', component: NicknameSubmitComponent
  },
  {
    path: 'pokemon', component: PokemonContainerComponent,
  },
  {
    path: 'pokemon/:id', component: PokemonComponent
  },
  {
    path: 'pokemon/search?species=:species', component: PokemonContainerComponent,
  },
  {
    path: 'admin', component: AdminComponent
  }
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
