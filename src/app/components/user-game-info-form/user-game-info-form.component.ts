import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserGameInfo } from 'src/models/userGameInfo.model';

@Component({
  selector: 'app-user-game-info-form',
  templateUrl: './user-game-info-form.component.html',
  styleUrls: ['./user-game-info-form.component.scss']
})
export class UserGameInfoFormComponent implements OnInit {

  @Output()
  sendUserGameInfoForm : EventEmitter<UserGameInfo> = new EventEmitter;

  userGameInfo : UserGameInfo = new UserGameInfo (0,'', '', 0, '', '', '');

  userGameInfoList : UserGameInfo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.sendUserGameInfoForm.emit(this.userGameInfo);
  }

  nextGame() : void {
    this.userGameInfoList.push({...this.userGameInfo});
    console.log(this.userGameInfo);



}
}
