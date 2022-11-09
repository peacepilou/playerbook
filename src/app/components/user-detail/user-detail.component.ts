import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input()
  userFoundToChild: User = new User(0, '', '', '', '',
  new UserBehavior(0, true, true, true, true, ''),
  new PlayerHabit(0, 2, 3, false, true, true, true, true),
  [new Game(0, "", "", "", [new Genre(0, "", [])], [])],
  [new UserGameInfo(0, "", "", 0, "", "", "")]
);

  isAddGameFormVisible: boolean = false;

  userGameInfoResult : UserGameInfo = new UserGameInfo (0,'', '', 0, '', '', '');

  constructor(private userApi: UserHttpService, private router: Router) { }

  ngOnInit(): void { }

  receiveUserGameInfoForm(event : UserGameInfo) : void {
    this.userGameInfoResult = event;
  }


  delete(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre profil ? ")) {
      this.userApi.deleteUserById(this.userFoundToChild?.id)
      .subscribe(() => { this.router.navigateByUrl("/home"); })
    }

  }
}