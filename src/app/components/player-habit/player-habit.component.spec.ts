import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerHabitComponent } from './player-habit.component';

describe('PlayerHabitComponent', () => {
  let component: PlayerHabitComponent;
  let fixture: ComponentFixture<PlayerHabitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerHabitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerHabitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
