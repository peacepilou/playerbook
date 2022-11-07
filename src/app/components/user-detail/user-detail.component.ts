import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input()
  userFoundToChild: User | undefined = new User(0, '', '', '', '',
    new UserBehavior(true, true, true, true, ''),
    new PlayerHabit(2, false, 3, true, true, true, true),
    [new Game('', '', '', [new Genre(''), new Genre('')], '', 0, '', '', '')]
  );

  constructor(private userApi: UserHttpService, private router: Router) { }

  ngOnInit(): void { }

  delete(): void {
    if (confirm("Etes vous sur de vouloir supprimer votre profil ? ")) {
      this.userApi.deleteUserById(this.userFoundToChild?.id)
      .subscribe(() => { this.router.navigateByUrl("/home"); })
    }

  }
}