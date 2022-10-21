import { Component, OnInit } from '@angular/core';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-behavior',
  templateUrl: './user-behavior.component.html',
  styleUrls: ['./user-behavior.component.scss']
})
export class UserBehaviorComponent implements OnInit {

  userBehavior: UserBehavior = new UserBehavior (false, false, false, false,"")

  constructor() { }

  ngOnInit(): void {
  }

}
