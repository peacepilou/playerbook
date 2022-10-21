import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss'],
})
export class SearchListComponent implements OnInit {
  searchedContent: string = '';

  constructor() {}

  ngOnInit(): void {}

  catchSearchedContent(event: string): void {
    this.searchedContent = event;
  }
}
