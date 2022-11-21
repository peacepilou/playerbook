import { Component, OnInit } from '@angular/core';
import { LandingButton } from 'src/models/landing-button.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  buttonList : LandingButton[] = [
    new LandingButton(0, `Pas encore inscrit ?`, `Je m'inscris`, `/inscription`),
    new LandingButton(1, `Tu veux voir qui est là ?`, `Entrer`, `/home`)
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
