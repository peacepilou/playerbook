import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Checkbox } from 'src/models/checkbox.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { UserBehavior } from 'src/models/userBehavior.model';

import { AppUser } from 'src/models/appUser.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  searchedContentChild: string = '';

  userList: AppUser[] = [];
  userListFilteredBySearchbar: AppUser[] = [];
  userListFilteredByCheckbox: AppUser[] = [];
  mergedLists: AppUser[] = [];

  isOneCheckboxTruthy: boolean = false;
  isSearchbarTruthy: boolean = false;

  checkboxList: Checkbox[] = [
    new Checkbox('Joueur professionnel', 'pro', false, 'UserBehavior'),
    new Checkbox('Joueur occasionnel', 'casual', false, 'UserBehavior'),
    new Checkbox("Leader d'équipe", 'leader', false, 'PlayerHabit'),
    new Checkbox('PVP friendly', 'pvp', false, 'PlayerHabit'),
    new Checkbox('PVE friendly', 'pve', false, 'PlayerHabit'),
    new Checkbox('Oiseau de nuit', 'nocturnal', false, 'PlayerHabit'),
    new Checkbox('Joueur pro-actif', 'proactive', false, 'UserBehavior'),
    new Checkbox('Joueur extraverti', 'extravert', false, 'UserBehavior'),
  ];

  change: boolean = false;

  constructor(private userApi: UserHttpService) { }

  ngOnChanges(): void {
    if (this.userList.length > 0) {
      this.filterBySearchbar();
    }
  }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }

  catchCheckboxChange(checkbox: Checkbox): void {
    this.updateMatchingCheckbox(checkbox);
  }

  updateMatchingCheckbox(checkbox: Checkbox): void {
    this.checkboxList.map(checkboxInList => {
      if (checkbox.description === checkboxInList.description) {
        checkboxInList.isActive = checkbox.isActive;
      }
      this.checkboxList.find((c) => c.isActive) ?
        this.isOneCheckboxTruthy = true :
        this.isOneCheckboxTruthy = false;
    })
    this.filterByCheckbox();
  }

  filterByCheckbox(): void {
    let updatedArr: AppUser[] = [...this.userList];
    const checkboxArrToCheck = this.checkboxList.filter((c) => c.isActive);

    checkboxArrToCheck.forEach((checkbox) => {
      updatedArr = [...this.filterArr(checkbox, updatedArr)];
    });
    this.userListFilteredByCheckbox = updatedArr;
    this.mergeFilteredLists();
  }

  filterBySearchbar(): void {
    if (this.searchedContentChild === '') {
      this.isSearchbarTruthy = false;
    } else {
      this.isSearchbarTruthy = true;
    }

    this.userListFilteredBySearchbar = this.userList.filter(
      (user) => {
        return user.username
          .toLowerCase()
          .includes(this.searchedContentChild.toLowerCase())
          || user.country
            .toLowerCase()
            .includes(this.searchedContentChild.toLowerCase())
          || this.filterByUserPseudo(user);
      });
    this.mergeFilteredLists();
  }

  filterByUserPseudo(user : AppUser) : boolean {
    let gameInfoListFiltered = user.userGameInfoList
            .filter(data => data.userPseudo.toLowerCase()
            .includes(this.searchedContentChild.toLowerCase()));
            return gameInfoListFiltered.length > 0 ? true : false;         
  }

  filterArr(checkbox: Checkbox, updatedArr: AppUser[]): AppUser[] {
    const propreyToFind = checkbox.userProperty;

    return updatedArr.filter((user) =>
      checkbox.category === 'PlayerHabit'
        ? user.playerHabits[propreyToFind as keyof PlayerHabit] ===
        checkbox.isActive
        : user.userBehavior[propreyToFind as keyof UserBehavior] ===
        checkbox.isActive
    );
  }

  mergeFilteredLists() {
    if (this.isOneCheckboxTruthy && this.isSearchbarTruthy) {
      this.mergedLists = [];
      for (let i = 0; i < this.userListFilteredByCheckbox.length; i++) {
        const matchFound: AppUser | undefined =
          this.userListFilteredBySearchbar.find(data => {
            return this.userListFilteredByCheckbox[i].username === data.username;
          })
        if (matchFound) {
          this.mergedLists.push(matchFound);
        }
      }
    }
  }
}
