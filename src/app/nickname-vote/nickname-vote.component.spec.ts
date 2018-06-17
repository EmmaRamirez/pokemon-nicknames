import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameVoteComponent } from './nickname-vote.component';

describe('NicknameVoteComponent', () => {
  let component: NicknameVoteComponent;
  let fixture: ComponentFixture<NicknameVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
