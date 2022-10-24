import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  searchedContentChild: string = '';

  @Input()
  checkBoxValueChild: {
    isPro: boolean;
    isCasual: boolean;
    isLeader: boolean;
    isPvpFriendly: boolean;
    isPveFriendly: boolean;
    isNocturnal: boolean;
    isProactive: boolean;
    isExtravert: boolean;
  } = {
    isPro: false,
    isCasual: false,
    isLeader: false,
    isPvpFriendly: false,
    isPveFriendly: false,
    isNocturnal: false,
    isProactive: false,
    isExtravert: false,
  };

  userList: User[] = [];

  userListFiltered: User[] = [];

  constructor(private userApi: UserHttpService) {}

  ngOnChanges(): void {
    // this.resultOnSearchbar();
    this.filterByCheckbox()

    console.log('valeurs dans userList', this.checkBoxValueChild);
    
  }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;
      console.log("data fetch = userList",data)
    });
  }
  // resultOnSearchbar(): void {
  //   this.userListFiltered = this.userList.filter(
  //     (user) =>
  //       user.name
  //         .toLowerCase()
  //         .includes(this.searchedContentChild.toLowerCase()) ||
  //       user.country
  //         .toLowerCase()
  //         .includes(this.searchedContentChild.toLowerCase()) ||
  //       user.gameList
  //         .map((game: { userPseudo: string }) => game.userPseudo)
  //         .includes(this.searchedContentChild.toLowerCase())
  //   );
  // }

  resetListIfCheckboxFalse(): void { 
    Object.values(this.checkBoxValueChild).every(e => e === false) === true
  }

  filterByCheckbox(): void {
    this.userListFiltered = this.userList.filter(
      (user) => 
      user.userBehavior.isPro === this.checkBoxValueChild.isPro &&
      user.userBehavior.isCasual === this.checkBoxValueChild.isCasual &&
      user.playerHabit.isLeader === this.checkBoxValueChild.isLeader &&
      user.playerHabit.pvpFriendly === this.checkBoxValueChild.isPvpFriendly &&
      user.playerHabit.pveFriendly === this.checkBoxValueChild.isPveFriendly &&
      user.playerHabit.isNocturnal === this.checkBoxValueChild.isNocturnal &&
      user.userBehavior.isProactive === this.checkBoxValueChild.isProactive &&
      user.userBehavior.isExtravert === this.checkBoxValueChild.isExtravert 
    )
  }
}
