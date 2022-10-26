import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxFilterUsersComponent } from './checkbox-filter-users.component';

describe('CheckboxFilterUsersComponent', () => {
  let component: CheckboxFilterUsersComponent;
  let fixture: ComponentFixture<CheckboxFilterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckboxFilterUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckboxFilterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
