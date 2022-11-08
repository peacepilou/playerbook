import { Component, Input, OnInit } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() gameChild: User = new User(0, '', '', '', '',
  new UserBehavior(0, true, true, true, true, ''),
  new PlayerHabit(0, 2, 3, false, true, true, true, true),
  [],
  []
);

  constructor() { }

  ngOnInit(): void {
  }

}
