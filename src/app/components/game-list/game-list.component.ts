import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss']
})
export class GameListComponent implements OnInit {



  gameList: Game[] = [
    new Game ("World of Warcraft","https://www.mamytwink.com/upload/news/2018/septembre/26/wow-classic-billet-virtuel-blizzcon-2018-wow.jpg",
  "Jason", [ new Genre("Mmorpg")], "LesBG", 4, "", "easy", "CasualServ"),
  new Game ("CallOfDuty","https://store-images.s-microsoft.com/image/apps.1926.67185831113154542.823e899c-d262-40a0-91f6-eee04bdc3713.ca4b2ff5-8dc9-4774-a5f1-4e379a72cbda?q=90&w=480&h=270",
  "Jason", [ new Genre("Mmorpg")], "LesBG", 4, "", "easy", "CasualServ"),
  new Game ("Lol","https://images.jeugeek.com/uploads/files/league-of-legends.jpg",
  "Jason", [ new Genre("Mmorpg")], "LesBG", 4, "", "easy", "CasualServ")

  

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
