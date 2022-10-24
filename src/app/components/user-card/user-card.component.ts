import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userCardChild: User = new User(0, "", "", "", "", new UserBehavior(true, true, true, true, ""), new PlayerHabit(0, true, 0, true, true, true, true), 
  [
    new Game("", "", "", [ new Genre("")], "", 0, "", "", "")
  ])

  constructor() { }

  ngOnInit(): void {
  }

}
