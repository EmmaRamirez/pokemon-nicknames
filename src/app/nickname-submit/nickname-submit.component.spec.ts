import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameSubmitComponent } from './nickname-submit.component';

describe('NicknameSubmitComponent', () => {
  let component: NicknameSubmitComponent;
  let fixture: ComponentFixture<NicknameSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
