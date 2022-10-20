import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FirstFormResults } from 'src/models/first-form-results.model';

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss']
})
export class FirstFormComponent implements OnInit {

  @Output()
  sendFirstForm : EventEmitter<FirstFormResults> = new EventEmitter;

  firstFormResults : FirstFormResults = new FirstFormResults('','','','',false,false,false,false);

  name : string = '';
  country : string = '';
  biography : string = '';
  employeer : string = '';

  isCasual : boolean = false;
  isProactive : boolean = false;
  isExtravert : boolean = false;
  isPro : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  
  onSubmit(){
    this.firstFormResults.name = this.name, 
    this.firstFormResults.country = this.country,
    this.firstFormResults.biography = this.biography,
    this.firstFormResults.employeer = this.employeer,
    this.firstFormResults.isCasual = this.isCasual,
    this.firstFormResults.isProactive = this.isProactive,
    this.firstFormResults.isExtravert = this.isExtravert,
    this.firstFormResults.isPro = this.isPro
      
    this.sendFirstForm.emit(this.firstFormResults);
    
  }

}
