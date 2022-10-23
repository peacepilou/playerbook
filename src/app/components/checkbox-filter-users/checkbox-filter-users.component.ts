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

  toggleIsPro(): void {
    this.isPro = !this.isPro;
  }

  toggleIsCasual(): void {
    this.isCasual = !this.isCasual;
  }

  toggleIsLeadero(): void {
    this.isLeader = !this.isLeader;
  }

  toggleIsPvpFriendly(): void {
    this.isPvpFriendly = !this.isPvpFriendly;
  }

  toggleIsPveFriendly(): void {
    this.isPveFriendly = !this.isPveFriendly;
  }

  toggleIsNocturnal(): void {
    this.isNocturnal = !this.isNocturnal;
  }

  toggleIsProactive(): void {
    this.isProactive = !this.isProactive;
  }

  toggleIsExtravert(): void {
    this.isExtravert = !this.isExtravert;
  }
}
