import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBehaviorComponent } from './user-behavior.component';

describe('UserBehaviorComponent', () => {
  let component: UserBehaviorComponent;
  let fixture: ComponentFixture<UserBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserBehaviorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
