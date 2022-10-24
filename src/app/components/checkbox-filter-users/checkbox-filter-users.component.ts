import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Checkbox } from 'src/models/checkbox.model';

@Component({
  selector: 'app-checkbox-filter-users',
  templateUrl: './checkbox-filter-users.component.html',
  styleUrls: ['./checkbox-filter-users.component.scss'],
})
export class CheckboxFilterUsersComponent implements OnInit {
  
  @Input() checkbox: Checkbox = new Checkbox("", "", false, "PlayerHabit");

  @Output() emitCheckboxChange: EventEmitter<Checkbox> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onChangeCheckbox(): void {
    this.checkbox.isActive = !this.checkbox.isActive;    
    this.emitCheckboxChange.emit(this.checkbox);
  }
}
