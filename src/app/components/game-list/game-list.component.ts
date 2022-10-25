import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {

  @Input()
  userGameListToChild: Game[] = [
    new Game("World of Warcraft", "https://worldofwarcraft.com/fr-fr/", "Elfy_the_bad_B", [ new Genre("MMORPG"), new Genre("PVP")], "Draenor", 160, "Leader", "Hard", "Bloom"),
    new Game("Dofus", "https://www.dofus.com/fr/", "Elfy_queen_B", [ new Genre("MMORPG"), new Genre("PVP")], "Pandore MasterG", 50, "Leader", "Medium", "Pandore")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
