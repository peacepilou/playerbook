import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}
}
