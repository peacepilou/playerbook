import {  Component, Input, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { Checkbox } from 'src/models/checkbox.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { UserBehavior } from "src/models/userBehavior.model";

import { User } from 'src/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {

  @Input()
  searchedContentChild: string = '';
  
  userList: User[] = [];
  userListFiltered: User[] = [];
  isOneElementTruthy: boolean = false;

  checkboxList: Checkbox[] = [
    new Checkbox("Joueur professionnel", "isPro", false, "UserBehavior"),
    new Checkbox("Joueur régulier", "isCasual", false, "UserBehavior"),
    new Checkbox("Leader d'équipe", "isLeader", false, "PlayerHabit"),
    new Checkbox("PVP friendly", "pvpFriendly", false, "PlayerHabit"),
    new Checkbox("PVE friendly", "pveFriendly", false, "PlayerHabit"),
    new Checkbox("Oiseau de nuit", "isNocturnal", false, "PlayerHabit"),
    new Checkbox("Joueur pro-actif", "isProactive", false, "UserBehavior"),
    new Checkbox("Joueur extraverti", "isExtravert", false, "UserBehavior"),
  ];
  

  constructor(private userApi: UserHttpService) {}


  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;      
      console.log("data fetch = userList", data)
    });
  }

  // Output listenner
  catchCheckboxChange(checkbox: Checkbox): void {
    this.updateMatchingCheckbox(checkbox);
    // Track the changes : when no checkbox is checked (at the beginning or after multiple combinations). Linked to HTML line 19
    this.isOneElementTruthy = !this.checkboxList.every(c => !c.isActive);
  }
   
  updateMatchingCheckbox(checkbox: Checkbox): void {
    const checkboxFound = this.checkboxList.find(c => c.description === checkbox.description);
    if(checkboxFound) {
      checkboxFound.isActive = checkbox.isActive;
      this.filterByCheckbox();
    }
  }

  filterByCheckbox(): void {
    // By default, the array we want to filter is full by the user list.
    let updatedArr: User[] = [...this.userList];
    // Create an array containing only active checkboxes.
    const checkboxArrToCheck = this.checkboxList.filter(c => c.isActive);
    // Iterate through this array in order to keep and track users who are matching with activated checkboxes.
    checkboxArrToCheck.forEach(checkbox => {
      updatedArr = [...this.filterArr(checkbox, updatedArr)];
    })
    // Update the array we loop on in the template part. 
    this.userListFiltered = updatedArr;
    
  }

  filterArr(checkbox: Checkbox, updatedArr: User[] ): User[] {
    // Check the property we need to find in each user object. Depends on the checkbox. 
    const propreyToFind = checkbox.userProperty;

    return updatedArr.filter(
      (user) => checkbox.category === "PlayerHabit" ? 
      user.playerHabit[propreyToFind as keyof PlayerHabit] === checkbox.isActive : 
      user.userBehavior[propreyToFind as keyof UserBehavior] === checkbox.isActive
    )

  }
}
