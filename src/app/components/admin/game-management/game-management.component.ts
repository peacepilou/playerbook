import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { GameHttpService } from 'src/app/shared/game-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Component({
  selector: 'app-game-management',
  templateUrl: './game-management.component.html',
  styleUrls: ['./game-management.component.scss']
})
export class GameManagementComponent implements OnInit {

  
  @Output()
  deactivateForm : EventEmitter<boolean> = new EventEmitter;
  @Input()
  isNewGameFormActive: boolean = false;
  newGame: Game = new Game(0, '', '', '', [], []);
  newGenre: Genre = new Genre(0, '', []);
  gameList: Game[] = [];
  genreList: Genre[] = [];

  constructor(private gameHttpS: GameHttpService) { }

  ngOnInit(): void {
    this.gameHttpS.getGameList().subscribe((data) => {
      this.gameList = data;

      this.gameHttpS.getGenreList().subscribe((data) =>
        this.genreList = data);
    });
  }

  refreshGame() {
    this.newGame = new Game(0, '', '', '', [], []);
  }

  refreshGenre() {
    this.newGenre = new Genre(0, '', []);
  }

  pushGenreInList() {
    if(this.newGenre.name !== ''){
      this.newGame.genreList.push({ ...this.newGenre });
      this.refreshGenre();
    }
  }

  submitGame() {
    this.gameList.push({ ...this.newGame });
    this.refreshGame();
    this.refreshGenre();
    console.log(this.gameList);
  }

  closeWindow(){
    this.isNewGameFormActive = false;
    this.deactivateForm.emit(this.isNewGameFormActive)
    this.refreshGame();
    this.refreshGenre();
  }

}
