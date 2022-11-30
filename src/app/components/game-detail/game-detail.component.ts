import jwt_decode from "jwt-decode";
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserGameInfo } from 'src/models/userGameInfo.model';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';
import { HotToastService } from '@ngneat/hot-toast';
import { AppUser } from "src/models/appUser.model";
import { PlayerHabit } from "src/models/playerHabit.model";
import { UserBehavior } from "src/models/userBehavior.model";

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Output()
  sendGameInfoChild: EventEmitter<number> = new EventEmitter();
  @Output() 
  sendGameToUpdate: EventEmitter<UserGameInfo> = new EventEmitter();

  @Input() 
  gameInfoChild: UserGameInfo  = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));

  @Input()
  userGameDetailToChild: AppUser = new AppUser('', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  [], ''
);

  isOwner : boolean = false;

  jwtTokenDecoded :string  | null= ""

  constructor(private httpUserGameInfoS : UserGameInfoService, private toast: HotToastService) { }

  ngOnInit(): void {
    this.readToken();
    this.checkUser();
  }

  delete(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer ce jeu ? ")) {
      this.httpUserGameInfoS.deleteUserGameInfoById(this.gameInfoChild.id)
      .subscribe(() => {this.sendGameInfoChild.emit(this.gameInfoChild.id)})
    }
  }

  put(): void {
    this.sendGameToUpdate.emit(this.gameInfoChild)
  }

  deleteGameToast() {
    this.toast.success('Jeu supprimé de ton profil !', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }

  readToken(): void {
    const token = localStorage.getItem("tokenId") as string;
    this.jwtTokenDecoded = jwt_decode(token);    
  }

  checkUser(){
    if(this.jwtTokenDecoded){
      if( this.userGameDetailToChild.username.toString() === this.jwtTokenDecoded?.sub.toString()){
        this.isOwner = true
      } else {
        this.isOwner = false
      }
    } else null
  }

}
