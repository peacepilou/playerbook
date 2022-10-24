import { Component, OnInit } from '@angular/core';
import { LandingButton } from 'src/models/landing-button.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  buttonList : LandingButton[] = [
    new LandingButton(0, `Alors, inscris-toi.`, `Je m'inscris`, `/inscription`),
    new LandingButton(1, `Tu as déjà un compte ?`, `Connexion`, `/home`)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
