import jwt_decode from "jwt-decode";

import { Component, Input, OnInit } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() userCardChild: AppUser = new AppUser('', '', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

tokenId = localStorage.getItem("tokenId");

  constructor() { }

  ngOnInit(): void {
  }

}
