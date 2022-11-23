import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit {


  @Output()
  sendFirstForm : EventEmitter<AppUser> = new EventEmitter;

  @Input()
  dataToChild : AppUser = new AppUser('', '', '', '', '',
  new UserBehavior(true, true, true, true, ''),
  new PlayerHabit(2, 3, false, true, true, true, true),
  [],
  []
);

passwordConfirmation : string = '';

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
      
    this.sendFirstForm.emit(this.dataToChild);
    
  }

}
