import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  userId: number = 0;
  userList: User[] = [];
  userFound: User| undefined = new User(0, "", "", "", "", new UserBehavior(true, true, true, true, ""), new PlayerHabit(0, true, 0, true, true, true, true), 
  [
    new Game("", "", "", [ new Genre("")], "", 0, "", "", "")
  ])

  constructor(private userApi: UserHttpService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;

      this.router.paramMap.subscribe((param: ParamMap) => {
        if(param.get("id")) {
          this.userId = parseInt(param.get("id") as string);
          console.log("userId", this.userId);
          
          this.userFound = this.userList.find(userList => userList.id === this.userId); 
          console.log("userFound", this.userFound);
        }
      })
    });

    
   
    
    
  }
}
