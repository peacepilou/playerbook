import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
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
  userFoundToChild: User = new User( '', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);


  constructor(private userApi: UserHttpService, private router: Router) { }

  ngOnInit(): void { }

  delete(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre profil ? ")) {
      this.userApi.deleteUserById(this.userFoundToChild?.id)
      .subscribe(() => { this.router.navigateByUrl("/home"); })
    }
  }
}