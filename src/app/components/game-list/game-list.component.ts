import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Input()
  userGameListToChild: AppUser = new AppUser('', '', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

  constructor() { }

  ngOnInit(): void {
  }

}
