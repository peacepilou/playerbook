import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingLogoComponent } from './landing-logo.component';

describe('LandingLogoComponent', () => {
  let component: LandingLogoComponent;
  let fixture: ComponentFixture<LandingLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
