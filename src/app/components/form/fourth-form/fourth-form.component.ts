import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GenreListService } from 'src/app/shared/genre-list.service';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.component.html',
  styleUrls: ['./fourth-form.component.scss']
})
export class FourthFormComponent implements OnInit {

  @Output()
  sendFourthForm: EventEmitter<Game[]> = new EventEmitter;

  fourthFormResults: Game = new Game('', '', '',
    [], '', 0, '', '', '');

  gameList: Game[] = [];
  genreList: Genre[] = this.getGenreList.getGenreList();

  constructor(private getGenreList: GenreListService) { }

  ngOnInit(): void {    
  }

  onSubmit(): void {
    this.sendFourthForm.emit(this.gameList);
  }

  nextGame(): void {
    this.gameList.push({ ...this.fourthFormResults });
    this.fourthFormResults.genreList = [];
    console.log(this.gameList);
  }

  checkGenre(i: number) : void {
    let actualGenre: Genre = this.genreList[i];

    let positionOfGenreAlreadyIn : number = 
    this.fourthFormResults.genreList.findIndex(genre => {
      return genre === actualGenre;
    });

    if (positionOfGenreAlreadyIn === -1) {
      this.fourthFormResults.genreList.push(actualGenre);
    }else{
      this.fourthFormResults.genreList.splice(positionOfGenreAlreadyIn, 1);
    }

  }

}
