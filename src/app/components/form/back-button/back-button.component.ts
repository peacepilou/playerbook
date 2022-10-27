import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent implements OnInit {

  constructor() { }

  @Output()
  goBack : EventEmitter<any> = new EventEmitter;

  ngOnInit(): void {
  }

  goBackCall(){
    this.goBack.emit();
  }

}
