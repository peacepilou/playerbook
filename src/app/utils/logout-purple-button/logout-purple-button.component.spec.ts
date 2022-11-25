import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutPurpleButtonComponent } from './logout-purple-button.component';

describe('LogoutPurpleButtonComponent', () => {
  let component: LogoutPurpleButtonComponent;
  let fixture: ComponentFixture<LogoutPurpleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutPurpleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutPurpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
