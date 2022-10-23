import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  searchedContent: string = "";
  @Output()
  sendSearchedContent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  
  sendSearchedContentToParent(): void {
    this.sendSearchedContent.emit(this.searchedContent);
  }

}
