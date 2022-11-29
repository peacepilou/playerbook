import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserGameInfo } from 'src/models/userGameInfo.model';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';
import { HotToastService } from '@ngneat/hot-toast';

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

  @Input() gameInfoChild: UserGameInfo  = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));

  constructor(private httpUserGameInfoS : UserGameInfoService, private toast: HotToastService) { }

  ngOnInit(): void {
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

    // this.httpUserGameInfoS.putUserGameInfoById(this.gameInfoChild.id, this.gameInfoChild)
    // .subscribe(()=> {this.sendGameInfoChild.emit(this.gameInfoChild.id)})
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

}
