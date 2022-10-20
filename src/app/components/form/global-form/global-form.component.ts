import { Component, OnInit } from '@angular/core';
import { FirstFormResults } from 'src/models/first-form-results.model';

@Component({
  selector: 'app-global-form',
  templateUrl: './global-form.component.html',
  styleUrls: ['./global-form.component.scss']
})
export class GlobalFormComponent implements OnInit {

  firstFormResults : FirstFormResults = new FirstFormResults(
    '', '', '', '', false, false, false, false);

    isFirstFormValid : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  receiveFirstForm(event : FirstFormResults) : void {
    this.firstFormResults = event;
    this.isFirstFormValid = true;
  }

}
