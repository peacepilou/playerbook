import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserBehavior } from 'src/models/userBehavior.model';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {

  @Output()
  sendsecondForm : EventEmitter<UserBehavior> = new EventEmitter;

  @Input()
  dataToChild : UserBehavior = new UserBehavior(
    false, false, false, false, ''
  );


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sendsecondForm.emit(this.dataToChild)
  }
}
