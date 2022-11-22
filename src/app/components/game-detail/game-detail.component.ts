import { Component, Input, OnInit } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() gameChild: AppUser = new AppUser('', '', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

  constructor() { }

  ngOnInit(): void {
  }

}
