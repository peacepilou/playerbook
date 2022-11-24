
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserGameInfo } from 'src/models/userGameInfo.model';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';


@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Output()
  sendGameInfoChild: EventEmitter<number> = new EventEmitter();

  @Input() gameInfoChild: UserGameInfo  = new UserGameInfo (new Game ('', '', '', [], [], 0), '', '', 0, '', '', '',0)

  constructor(private httpUserGameInfoS : UserGameInfoService) { }

  ngOnInit(): void {
  }

  delete(): void {
    if (confirm("Êtes-vous sûr de vouloir ce jeu ? ")) {
      this.httpUserGameInfoS.deleteUserGameInfoById(this.gameInfoChild.id)
      .subscribe(() => {this.sendGameInfoChild.emit(this.gameInfoChild.id)})
      
    }
  }

}
