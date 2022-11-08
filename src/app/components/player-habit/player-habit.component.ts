import { Component, Input, OnInit } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';

@Component({
  selector: 'app-player-habit',
  templateUrl: './player-habit.component.html',
  styleUrls: ['./player-habit.component.scss'],
})
export class PlayerHabitComponent implements OnInit {
  @Input()
  playerHabitToChild: PlayerHabit | undefined = new PlayerHabit(0, 2, 3, false, true, true, true, true)

  constructor() {}

  ngOnInit(): void {}
}
