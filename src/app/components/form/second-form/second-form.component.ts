import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SecondFormResults } from 'src/models/second-form-results.model';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {

  @Output()
  sendSecondForm : EventEmitter<SecondFormResults> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
