import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameManagementButtonComponent } from './game-management-button.component';

describe('GameManagementButtonComponent', () => {
  let component: GameManagementButtonComponent;
  let fixture: ComponentFixture<GameManagementButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameManagementButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameManagementButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
