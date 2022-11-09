import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-management-button',
  templateUrl: './game-management-button.component.html',
  styleUrls: ['./game-management-button.component.scss']
})
export class GameManagementButtonComponent implements OnInit {

  buttonPushed: boolean = false;

  @Output()
  isNewGameFormActive : EventEmitter<boolean> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  sendIsNewGameFormActive() {
    this.isNewGameFormActive.emit(this.buttonPushed);
  }

  public pushButton(){
    this.buttonPushed = true;
    this.sendIsNewGameFormActive();    
  }

}
