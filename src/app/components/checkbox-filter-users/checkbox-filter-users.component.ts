import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { User } from 'src/models/user.model';

@Component({
  selector: 'app-checkbox-filter-users',
  templateUrl: './checkbox-filter-users.component.html',
  styleUrls: ['./checkbox-filter-users.component.scss']
})
export class CheckboxFilterUsersComponent implements OnInit {

  userList: User[] = [];

  isPro: boolean = false;
  isCasual: boolean = false;
  isLeader: boolean = false;
  isPvpFriendly: boolean = false;
  isPveFriendly: boolean = false;
  isNocturnal: boolean = false;
  isProactive: boolean = false;
  isExtravert: boolean = false;

  constructor(private userApi: UserHttpService) { }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe((data) => {
      this.userList = data;
    });
  }
}
