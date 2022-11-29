import { Component, Input, OnInit, Output } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {
  @Input()
  userGameListToChild: AppUser = new AppUser('', '', '', '',
    new UserBehavior(true, true, true, true, ''),
    new PlayerHabit(2, 3, false, true, true, true, true),
    [],
    [], ''
  );

  userId : number = 0;

  isAddGameFormVisible: boolean = false;

  userGameInfoResult: UserGameInfo = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));

  userGameInfoList: UserGameInfo[] = [];

  gameToUpdate: UserGameInfo = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));

  constructor(private httpUserGameInfoS: UserGameInfoService) { }

  ngOnChanges() : void{
    this.userId = this.userGameListToChild.id as number;
  }

  ngOnInit(): void {
    this.getUserGameInfoList()
  }

  addGame(): void {
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  receiveUserGameInfoForm(event: UserGameInfo): void {
    this.userGameInfoResult = event;
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  getUserGameInfoList(): void {
    this.httpUserGameInfoS.getUserGameInfoList().subscribe((data) => {
      this.userGameInfoList = data;
    });
  }

  catchGameInfoContent(id: number): void {
    this.userGameInfoList = this.userGameInfoList.filter(userGameInfo => userGameInfo.id !== id)
  }

  catchGameToUpdate(gameToUpdateFromChild: UserGameInfo): void {
    console.log(gameToUpdateFromChild);
    this.addGame();
    this.gameToUpdate = gameToUpdateFromChild;
  }  

}
