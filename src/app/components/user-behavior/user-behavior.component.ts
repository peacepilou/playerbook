import { Component, Input, OnInit } from '@angular/core';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-user-behavior',
  templateUrl: './user-behavior.component.html',
  styleUrls: ['./user-behavior.component.scss']
})
export class UserBehaviorComponent implements OnInit {

  @Input()
  userBehaviorToChild: UserBehavior | undefined= new UserBehavior(true, true, true, true, "Blizzard ESport")

  constructor() { }

  ngOnInit(): void {
  }

}
