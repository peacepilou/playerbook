import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthFormComponent } from './fourth-form.component';

describe('FourthFormComponent', () => {
  let component: FourthFormComponent;
  let fixture: ComponentFixture<FourthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
