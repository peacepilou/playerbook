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
  
  activateForm(event : boolean) : void{
    this.isGameFormButtonPushed = event;
    
  }

  deactivateForm(event : boolean){
    this.isGameFormButtonPushed = event;
  }

}
