import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDescriptionComponent } from './site-description.component';

describe('SiteDescriptionComponent', () => {
  let component: SiteDescriptionComponent;
  let fixture: ComponentFixture<SiteDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteDescriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
