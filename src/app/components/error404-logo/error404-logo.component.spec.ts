import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error404LogoComponent } from './error404-logo.component';

describe('Error404LogoComponent', () => {
  let component: Error404LogoComponent;
  let fixture: ComponentFixture<Error404LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error404LogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error404LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
