import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GameListService } from 'src/app/shared/game-list.service';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Component({
  selector: 'app-user-game-info-form',
  templateUrl: './user-game-info-form.component.html',
  styleUrls: ['./user-game-info-form.component.scss']
})
export class UserGameInfoFormComponent implements OnInit {

  userId: number = 0;

  @Output()
  sendUserGameInfoForm : EventEmitter<UserGameInfo> = new EventEmitter;

  userGameInfo : UserGameInfo = new UserGameInfo (
    new Game ('', '', '', [], [], 0) ,'', '', 0, '', '', '',0);

  userGameInfoList : UserGameInfo[] = [];

  gameList: Game[] = []

  isAddGameFormVisible: boolean = true;

  constructor(private httpGameS : GameListService, 
              private httpUserGameInfoS : UserGameInfoService,) {}

  ngOnInit(): void {
    this.httpGameS.getGameList().subscribe((data) => {
      this.gameList = data;
     });
  }

  closeInfoForm(): void {
    this.sendUserGameInfoForm.emit(this.userGameInfo);
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  nextGame() : void {
    this.userGameInfoList.push({...this.userGameInfo});
    console.log(this.userGameInfo);
  }

  postUserGameInfo() : void {
    console.log(this.userGameInfo)
    let gIcloned = {...this.userGameInfo};
    delete gIcloned.id;
    this.httpUserGameInfoS.postNewUserGameInfo(this.userGameInfo).subscribe(() => {
      this.closeInfoForm();
    })
  }

  


}
