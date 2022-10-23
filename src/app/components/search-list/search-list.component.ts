import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  searchedContent: string = '';

  checkBoxValue: {
    isPro: boolean;
    isCasual: boolean;
    isLeader: boolean;
    isPvpFriendly: boolean;
    isPveFriendly: boolean;
    isNocturnal: boolean;
    isProactive: boolean;
    isExtravert: boolean;
  } = {
    isPro: false,
    isCasual: false,
    isLeader: false,
    isPvpFriendly: false,
    isPveFriendly: false,
    isNocturnal: false,
    isProactive: false,
    isExtravert: false,
  };

  constructor() {}

  ngOnInit(): void {}

  catchSearchedContent(event: string): void {
    this.searchedContent = event;
  }

  catchValuesCheckbox(event: {
    isPro: boolean;
    isCasual: boolean;
    isLeader: boolean;
    isPvpFriendly: boolean;
    isPveFriendly: boolean;
    isNocturnal: boolean;
    isProactive: boolean;
    isExtravert: boolean;
  }): void {
    this.checkBoxValue = event;
    console.log("valeur dans le parent", event)
  }
}
