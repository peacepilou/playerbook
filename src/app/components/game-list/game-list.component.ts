import jwt_decode from "jwt-decode";
import { Component, Input, OnInit } from '@angular/core';
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

  isOwner : boolean = false;

  jwtTokenDecoded :string  | null= ""

  constructor(private httpUserGameInfoS: UserGameInfoService) { }

  ngOnChanges() : void{
    this.userId = this.userGameListToChild.id as number;
    this.checkUser();
  }

  ngOnInit(): void {
    this.getUserGameInfoList()
    this.readToken();
  }

  readToken(): void {
    const token = localStorage.getItem("tokenId") as string;
    this.jwtTokenDecoded = jwt_decode(token);    
  }

  checkUser(){
    if(this.jwtTokenDecoded){
      this.userGameListToChild.username.toString() === 
      this.jwtTokenDecoded?.sub.toString() ? 
      this.isOwner = true : false;
    }
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
      console.log(data);
      
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
