import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
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
  dataToChild : User = new User(0,'','','','',
  new UserBehavior(false, false, false, false, ''), 
  new PlayerHabit(0, false, 0, false, false, false, false), 
  [new Game('', '', '', [new Genre('')], '', 0, '', '', '')]
  );

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
      
    this.sendFirstForm.emit(this.dataToChild);
    
  }

}
