import { Component, OnInit, EventEmitter, Output, Input, SimpleChanges, OnChanges } from '@angular/core';
import { GameListService } from 'src/app/shared/game-list.service';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Component({
  selector: 'app-user-game-info-form',
  templateUrl: './user-game-info-form.component.html',
  styleUrls: ['./user-game-info-form.component.scss']
})
export class UserGameInfoFormComponent implements OnInit, OnChanges {

  userId: number = 0;

  @Output()
  sendUserGameInfoForm : EventEmitter<UserGameInfo> = new EventEmitter;

  @Input() gameToUpdateChild: UserGameInfo  = new UserGameInfo (new Game ('', '', '', [], [], 0), '', '', 0, '', '', '',0)

  userGameInfo : UserGameInfo = new UserGameInfo (
    new Game ('', '', '', [], [], 0) ,'', '', 0, '', '', '',0);

  userGameInfoList : UserGameInfo[] = [];

  gameList: Game[] = []

  isAddGameFormVisible: boolean = true;

  constructor(private httpGameS : GameListService, 
              private httpUserGameInfoS : UserGameInfoService,) {}

  ngOnInit(): void {
    console.log("coucou");
    
    this.httpGameS.getGameList().subscribe((data) => {
      this.gameList = data;
     });
     console.log(this.gameList);
     
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userGameInfo = this.gameToUpdateChild;
    
  }

  closeInfoForm(): void {
    this.sendUserGameInfoForm.emit(this.userGameInfo);
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  nextGame() : void {
    this.userGameInfoList.push({...this.userGameInfo});
    console.log(this.userGameInfo);
  }

  sendUserGameInfo() : void {
    
    if(this.userGameInfo.id){
      this.httpUserGameInfoS.putUserGameInfoById(this.userGameInfo.id, this.userGameInfo).subscribe(() => {
        this.closeInfoForm();
      })
    } else {
      this.httpUserGameInfoS.postNewUserGameInfo(this.userGameInfo).subscribe(() => {
        this.closeInfoForm();
      })
    }
  }
}
