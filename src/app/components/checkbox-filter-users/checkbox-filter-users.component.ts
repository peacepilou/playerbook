import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox-filter-users',
  templateUrl: './checkbox-filter-users.component.html',
  styleUrls: ['./checkbox-filter-users.component.scss'],
})
export class CheckboxFilterUsersComponent implements OnInit {
  isPro: boolean = false;
  isCasual: boolean = false;
  isLeader: boolean = false;
  isPvpFriendly: boolean = false;
  isPveFriendly: boolean = false;
  isNocturnal: boolean = false;
  isProactive: boolean = false;
  isExtravert: boolean = false;

  @Output()
  sendValuesCheckbox: EventEmitter<{
    isPro: boolean;
    isCasual: boolean;
    isLeader: boolean;
    isPvpFriendly: boolean;
    isPveFriendly: boolean;
    isNocturnal: boolean;
    isProactive: boolean;
    isExtravert: boolean;
  }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  sendValuesCheckboxToParent(): void {
    this.sendValuesCheckbox.emit({
      isPro: this.isPro,
      isCasual: this.isCasual,
      isLeader: this.isLeader,
      isPvpFriendly: this.isPvpFriendly,
      isPveFriendly: this.isPveFriendly,
      isNocturnal: this.isNocturnal,
      isProactive: this.isProactive,
      isExtravert: this.isExtravert,
    });
  }
}
