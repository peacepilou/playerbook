import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  deactivateForm: EventEmitter<boolean> = new EventEmitter;
  @Input()
  isNewGameFormActive: boolean = false;
  newGame: Game = new Game('', '', '', [], [], 0);
  newGenre: Genre = new Genre('', []);
  genreList: Genre[] = [];
  isDuplicate : boolean = false;

  constructor(private gameHttpS: GameHttpService) { }

  ngOnInit(): void {
  }

  refreshGame() {
    this.newGame = new Game('', '', '', [], [], 0);
  }

  refreshGenre() {
    this.newGenre = new Genre('', []);
  }

  pushGenreInGenreList() {
    if (this.newGenre.name !== '') {
      let alreadyExist = 
      this.newGame.genreList.find(genre => genre.name === this.newGenre.name)

      if(alreadyExist?.name === undefined){
      this.newGame.genreList.push({...this.newGenre});
      this.isDuplicate = false;
      }else{
      this.isDuplicate = true;
      }
    }
    this.refreshGenre();    
  }

  submitGame() {
    this.gameHttpS.addNewGame({...this.newGame}).subscribe(() => {
    })
    this.refreshGame();
    this.refreshGenre();
    this.closeWindow();
  }

  closeWindow() {
    this.isNewGameFormActive = false;
    this.deactivateForm.emit(this.isNewGameFormActive)
    this.refreshGame();
    this.refreshGenre();
  }

}
