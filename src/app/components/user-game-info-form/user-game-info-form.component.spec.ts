import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGameInfoFormComponent } from './user-game-info-form.component';

describe('UserGameInfoFormComponent', () => {
  let component: UserGameInfoFormComponent;
  let fixture: ComponentFixture<UserGameInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGameInfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserGameInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
