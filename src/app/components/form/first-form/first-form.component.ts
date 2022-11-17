import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit {


  @Output()
  sendFirstForm : EventEmitter<User> = new EventEmitter;

  @Input()
  dataToChild : User = new User('', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
      
    this.sendFirstForm.emit(this.dataToChild);
    
  }

}
