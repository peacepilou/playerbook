import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { AppUser } from 'src/models/appUser.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.scss'],
})
export class GlobalFormComponent implements OnInit {
  userId: number = 0;

  firstFormResults: AppUser = new AppUser('', '', '', '',
    new UserBehavior(false, false, false, false, ''),
    new PlayerHabit(0, 0, false, false, false, false, false),
    [],
    [], ''
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
    0,
    false,
    false,
    false,
    false,
    false
  );

  formStep: number = 1;

  constructor(private userHttpS: UserHttpService, private route: Router, private router: ActivatedRoute, private toast: HotToastService) {}

  ngOnInit(): void {
    this.router.paramMap.subscribe((param: ParamMap) => {
      if (param.get("id")) {

        this.userId = parseInt(param.get("id") as string);
        this.userHttpS.getUserById(this.userId).subscribe(data =>
          this.firstFormResults = data
        );
        delete this.firstFormResults.password;
      }
    });
  }

  receiveFirstForm(event: AppUser): void {
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

    let globalFormResults: AppUser = new AppUser(
      this.firstFormResults.username,
      this.firstFormResults.linkAvatar,
      this.firstFormResults.country,
      this.firstFormResults.biography,
      this.secondFormResults,
      this.thirdFormResults,
      [],
      [],
      this.firstFormResults.password,
      [],
      this.firstFormResults.id,
    );


    if (this.userId) {
      this.userHttpS.updateUserById(globalFormResults, this.userId).subscribe(() => {
        this.updateProfileToast();
        this.route.navigateByUrl(`/user-profile/${this.userId}`)
      })
    } else {
      this.userHttpS.postNewUser(globalFormResults).subscribe(() => {
        this.registerToast();
        this.route.navigateByUrl('/');
      });
    }
  }

  goBack() {
    this.formStep -= 1;
  }

  registerToast(): void {
    this.toast.success('Profil créé avec succès. Tu peux maintenant te connecter !', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }

  updateProfileToast(): void {
    this.toast.success('Profil modifié avec succès.', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }
}
