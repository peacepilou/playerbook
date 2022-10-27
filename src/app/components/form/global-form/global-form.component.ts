import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.scss'],
})
export class GlobalFormComponent implements OnInit {
  userId: number = 0;

  firstFormResults: User = new User(
    0,
    '',
    '',
    '',
    '',
    new UserBehavior(false, false, false, false, ''),
    new PlayerHabit(0, false, 0, false, false, false, false),
    [new Game('', '', '', [new Genre('')], '', 0, '', '', '')]
  );

  secondFormResults: UserBehavior = new UserBehavior(
    false,
    false,
    false,
    false,
    ''
  );

  thirdFormResults: PlayerHabit = new PlayerHabit(
    0,
    false,
    0,
    false,
    false,
    false,
    false
  );

  fourthFormResults: Game[] = [];

  formStep: number = 1;

  constructor(private userHttpS: UserHttpService, private route: Router, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      if(param.get("id")) {
        this.userId = parseInt(param.get("id") as string);
      }
      return this.userId
    });
    this.userHttpS.getUserById(this.userId).subscribe(data => this.firstFormResults = data);

  }

  receiveFirstForm(event: User): void {
    this.firstFormResults = event;
    this.formStep += 1;
  }

  receiveSecondForm(event: UserBehavior): void {
    this.secondFormResults = event;
    this.formStep += 1;
  }

  receiveThirdForm(event: PlayerHabit): void {
    this.thirdFormResults = event;
    this.formStep += 1;
  }

  receiveFourthForm(event: Game[]): void {
    this.fourthFormResults = event;
    this.formStep += 1;

    let globalFormResults: User = new User(
      this.firstFormResults.id,
      this.firstFormResults.name,
      this.firstFormResults.linkAvatar,
      this.firstFormResults.country,
      this.firstFormResults.biography,
      this.secondFormResults,
      this.thirdFormResults,
      this.fourthFormResults
    );

    if(this.userId){
      this.userHttpS.updateUserById(globalFormResults, this.userId).subscribe(() => {
        this.route.navigateByUrl(`/user-profile/${this.userId}`)
      })
    } else {
      this.userHttpS.postNewUser(globalFormResults).subscribe(() => {
        this.route.navigateByUrl('/home');
      });
    }
  }

  goBack() {
    this.formStep -= 1;
  }
}
