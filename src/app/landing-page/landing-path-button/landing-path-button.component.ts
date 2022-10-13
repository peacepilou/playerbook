import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { LandingButton } from 'src/models/landing-button.model';

@Component({
  selector: 'app-landing-path-button',
  templateUrl: './landing-path-button.component.html',
  styleUrls: ['./landing-path-button.component.scss']
})
export class LandingPathButtonComponent implements OnInit {

  @Input()
  getButton : LandingButton = new LandingButton(0, '', '', '');

  constructor() { }

  ngOnInit(): void {
  }

}
