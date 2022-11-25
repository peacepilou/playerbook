import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameHttpService } from 'src/app/shared/game-http.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { HotToastService } from '@ngneat/hot-toast';

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

  constructor(private gameHttpS: GameHttpService, private toast: HotToastService) { }

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
      this.refreshGame();
      this.refreshGenre();
      this.closeWindow();
      this.showToast()
    });
   
  }

  closeWindow() {
    this.isNewGameFormActive = false;
    this.deactivateForm.emit(this.isNewGameFormActive)
    this.refreshGame();
    this.refreshGenre();
  }

  showToast() {
    this.toast.success('Nouveau jeu ajouté dans la base de donnée !', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }

}
