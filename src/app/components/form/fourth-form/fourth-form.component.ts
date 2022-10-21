import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GameHttpService } from 'src/app/shared/game-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.component.html',
  styleUrls: ['./fourth-form.component.scss']
})
export class FourthFormComponent implements OnInit {

  @Output()
  sendFourthForm : EventEmitter<Game> = new EventEmitter;

  gameList : Game[] = [];
  gameListFiltered : Game[] = [];
  searchBarContent : string = '';

  fourthFormResults : Game = new Game('', '', '', 
  [new Genre('')], '', 0, '', '', '');

  constructor(private gameApi : GameHttpService) { }

  ngOnInit(): void {
    this.gameApi.getGameList().subscribe(data => {
      this.gameList = data;
    })
  }

  searchGame() : void {
    this.gameListFiltered = this.gameList.filter(game => game.name.includes(this.searchBarContent));
    
  }

  onSubmit() : void {
  }
}
