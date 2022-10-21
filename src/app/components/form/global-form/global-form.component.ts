import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.scss']
})
export class GlobalFormComponent implements OnInit {

  firstFormResults : User = new User(0,'','','','',
  new UserBehavior(false, false, false, false, ''), 
  new PlayerHabit(0, false, 0, false, false, false, false), 
  [new Game('', '', '', [new Genre('')], '', 0, '', '', '')]
  );

  secondFormResults : UserBehavior = new UserBehavior(
    false, false, false, false, ''
  );

  thirdFormResults : PlayerHabit = new PlayerHabit(
    0, false, 0, false, false, false, false
  );

  fourthFormResults : Game[] = [];

  isFirstFormValid : boolean = true;
  isSecondFormValid : boolean = false;
  isThirdFormValid : boolean = false;
  isFourthFormValid : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFirstForm(event : User) : void {
    this.firstFormResults = event;
    this.isFirstFormValid = false;
    this.isSecondFormValid = true;
    console.log(this.firstFormResults);
  }

  receiveSecondForm(event : UserBehavior) : void {
    this.secondFormResults = event;
    this.isSecondFormValid = false;
    this.isThirdFormValid = true;
    console.log(this.secondFormResults);
  }

  receiveThirdForm(event : PlayerHabit) : void {
    this.thirdFormResults = event;
    this.isThirdFormValid = false;
    this.isFourthFormValid = true;
    console.log(this.thirdFormResults);
  }

  receiveFourthForm(event : Game[]) : void {
    this.fourthFormResults = event;
    console.log(this.fourthFormResults);
  }

}
