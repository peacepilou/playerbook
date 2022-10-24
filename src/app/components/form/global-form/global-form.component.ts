import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
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
  isFormComplete : boolean = false;

  constructor(private userHttpS : UserHttpService) { }

  ngOnInit(): void {
  }

  receiveFirstForm(event : User) : void {
    this.firstFormResults = event;
    this.isFirstFormValid = false;
    this.isSecondFormValid = true;
  }

  receiveSecondForm(event : UserBehavior) : void {
    this.secondFormResults = event;
    this.isSecondFormValid = false;
    this.isThirdFormValid = true;
  }

  receiveThirdForm(event : PlayerHabit) : void {
    this.thirdFormResults = event;
    this.isThirdFormValid = false;
    this.isFourthFormValid = true;
  }

  receiveFourthForm(event : Game[]) : void {
    this.fourthFormResults = event;
    this.isFourthFormValid = false;
    this.isFormComplete = true;

  let globalFormResults : User = new User(
    this.firstFormResults.id,
    this.firstFormResults.name,
    this.firstFormResults.linkAvatar,
    this.firstFormResults.country,
    this.firstFormResults.biography,
    this.secondFormResults,
    this.thirdFormResults, 
    this.fourthFormResults
  );

  this.userHttpS.postNewUser(globalFormResults).subscribe();

  console.log(globalFormResults);
    
  }

}
