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
  userFoundToChild: User | undefined= new User(
    0,
    'Clem',
    'https://www.zupimages.net/up/22/43/gx9p.png',
    'Suisse',
    'Barbie bitch bébé',
    new UserBehavior(true, true, true, true, 'Blizzard ESport'),
    new PlayerHabit(2, false, 3, true, true, true, true),
    [
      new Game(
        'World of Warcraft',
        'https://worldofwarcraft.com/fr-fr/',
        'Elfy_the_bad_B',
        [new Genre('MMORPG'), new Genre('PVP')],
        'Draenor',
        160,
        'Leader',
        'Hard',
        'Bloom'
      ),
      new Game(
        'Dofus',
        'https://www.dofus.com/fr/',
        'Elfy_queen_B',
        [new Genre('MMORPG'), new Genre('PVP')],
        'Pandore MasterG',
        50,
        'Leader',
        'Medium',
        'Pandore'
      ),
    ]
  );

  constructor(private userApi: UserHttpService, private router: Router) {}

  ngOnInit(): void {}

  delete(): void {
    this.userApi.deleteUserById(this.userFoundToChild?.id).subscribe(() => {
      this.router.navigateByUrl("/home");
    });
  }
}
