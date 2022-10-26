import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() gameChild: Game = new Game ("","","", [ new Genre("")], "", 0, "", "", "");

  constructor() { }

  ngOnInit(): void {
  }

}
