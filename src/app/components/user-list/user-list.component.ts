import { Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Checkbox } from 'src/models/checkbox.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { UserBehavior } from 'src/models/userBehavior.model';

import { AppUser } from 'src/models/appUser.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  @Input()
  searchedContentChild: string = '';

  userList: AppUser[] = [];
  userListFiltered: AppUser[] = [];
  userListFilteredByCheckbox: AppUser[] = [];
  mergedLists: AppUser[] = [];

  isOneCheckboxTruthy: boolean = false;
  isSearchbarTruthy: boolean = false;
  isOneElementTruthy: boolean = false;

  checkboxList: Checkbox[] = [
    new Checkbox('Joueur professionnel', 'pro', false, 'UserBehavior'),
    new Checkbox('Joueur régulier', 'casual', false, 'UserBehavior'),
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
    this.filterBySearchbar();
    this.mergeFilteredLists();
  }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }

  // Output listenner
  catchCheckboxChange(checkbox: Checkbox): void {
    this.updateMatchingCheckbox(checkbox);
    // Track the changes : when no checkbox is checked (at the beginning or after multiple combinations). Linked to HTML line 19
    this.checkboxList.find((c) => c.isActive) ? this.isOneCheckboxTruthy = true : false;  
  }

  // updateMatchingCheckbox(checkbox: Checkbox): void {
  //   const checkboxFound = this.checkboxList.find(
  //     (c) => c.description === checkbox.description
  //   );
  //   if (checkboxFound) {
  //     checkboxFound.isActive = checkbox.isActive;
  //     this.filterByCheckbox();
  //   }
  // }

  updateMatchingCheckbox(checkbox: Checkbox): void {
    for (let i = 0; i < this.checkboxList.length; i++) {
      const checkboxFound = this.checkboxList.find(checkbox => {
        return checkbox.description === this.checkboxList[i].description;
      });
      if (checkboxFound) {
        this.checkboxList[i].isActive = checkbox.isActive;
      }
    }
    this.filterByCheckbox();
  }

  filterByCheckbox(): void {
    // By default, the array we want to filter is full by the user list.
    let updatedArr: AppUser[] = [...this.userList];
    // Create an array containing only active checkboxes.
    const checkboxArrToCheck = this.checkboxList.filter((c) => c.isActive);

    // Iterate through this array in order to keep and track users who are matching with activated checkboxes.
    checkboxArrToCheck.forEach((checkbox) => {
      updatedArr = [...this.filterArr(checkbox, updatedArr)];

    });
    // Update the array we loop on in the template part.
    this.userListFilteredByCheckbox = updatedArr;
    this.mergeFilteredLists();

  }

  filterBySearchbar(): void {
    if (this.searchedContentChild === '') {
      this.isSearchbarTruthy = false;
    } else {
      this.isSearchbarTruthy = true;
    }

    this.userListFiltered = this.userList.filter(
      (user) => {
        return user.username
          .toLowerCase()
          .includes(this.searchedContentChild.toLowerCase()) ||
          user.country
            .toLowerCase()
            .includes(this.searchedContentChild.toLowerCase())
        //   ||
        // user.userGameInfoList
        //   .map((info: { userPseudo: string }) => info.userPseudo)
        //   .includes(this.searchedContentChild.toLowerCase())
      }
    );
  }

  filterArr(checkbox: Checkbox, updatedArr: AppUser[]): AppUser[] {
    // Check the property we need to find in each user object. Depends on the checkbox.
    const propreyToFind = checkbox.userProperty;

    return updatedArr.filter((user) =>
      checkbox.category === 'PlayerHabit'
        ? user.playerHabits[propreyToFind as keyof PlayerHabit] ===
        checkbox.isActive
        : user.userBehavior[propreyToFind as keyof UserBehavior] ===
        checkbox.isActive
    );
  }

  checkIfOneElementTruthy() {
    if (this.isOneCheckboxTruthy || this.isSearchbarTruthy) {
      this.isOneElementTruthy = true;
    } else {
      this.isOneElementTruthy = false;
    }
  }

  mergeFilteredLists() {
    if (this.isOneCheckboxTruthy && this.isSearchbarTruthy) {
      this.mergedLists = [];
      for (let i = 0; i < this.userListFiltered.length; i++) {
        const matchFound: AppUser | undefined =
          this.userListFilteredByCheckbox.find(match => {
            return this.userListFiltered[i] === match;
          })
        if (matchFound) {
          this.mergedLists.push(matchFound);
        }
      }
    } else if (!this.isOneCheckboxTruthy) {
      this.mergedLists = this.userListFiltered;
    } else {
      this.mergedLists = this.userListFilteredByCheckbox
    }
    this.checkIfOneElementTruthy();


    console.log("checkbox status :", this.isOneCheckboxTruthy);
    // console.log("searchbar status :", this.isSearchbarTruthy);
    // console.log("isOneElementTruthy", this.isOneElementTruthy);
    // console.log("test list by checkbox", this.userListFilteredByCheckbox);
    // console.log("test list by searchbar", this.userListFiltered);
    // console.log("test mergedList", this.mergedLists);
  }
}
