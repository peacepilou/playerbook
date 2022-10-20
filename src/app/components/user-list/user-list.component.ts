import { Component, OnInit } from '@angular/core';
import { UserHttpService } from 'src/app/shared/user-http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: any[] = [];

  constructor(private userApi: UserHttpService) { }

  ngOnInit(): void {
    this.userApi.getUserList().subscribe(data => {
      this.userList = data
    })
  }

}
