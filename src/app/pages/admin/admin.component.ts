import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isGameFormButtonPushed : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  getGameButtonInput(event : boolean) : void{
    this.isGameFormButtonPushed = event;
    console.log(this.isGameFormButtonPushed);
  }

}
