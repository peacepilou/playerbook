import { Component, OnInit } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';

@Component({
  selector: 'app-player-habit',
  templateUrl: './player-habit.component.html',
  styleUrls: ['./player-habit.component.scss']
})
export class PlayerHabitComponent implements OnInit {

  playerHabit: PlayerHabit = new PlayerHabit (0, false, 0, false, false, false, false,)

  constructor() { }

  ngOnInit(): void {
  }

}
