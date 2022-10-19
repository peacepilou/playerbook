import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPathButtonComponent } from './landing-path-button.component';

describe('LandingPathButtonComponent', () => {
  let component: LandingPathButtonComponent;
  let fixture: ComponentFixture<LandingPathButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPathButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPathButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
