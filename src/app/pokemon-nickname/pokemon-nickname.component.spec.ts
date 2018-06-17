import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonNicknameComponent } from './pokemon-nickname.component';

describe('PokemonNicknameComponent', () => {
  let component: PokemonNicknameComponent;
  let fixture: ComponentFixture<PokemonNicknameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonNicknameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonNicknameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
