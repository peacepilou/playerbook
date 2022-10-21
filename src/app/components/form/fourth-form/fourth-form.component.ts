import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Component({
  selector: 'app-fourth-form',
  templateUrl: './fourth-form.component.html',
  styleUrls: ['./fourth-form.component.scss']
})
export class FourthFormComponent implements OnInit {

  @Output()
  sendFourthForm : EventEmitter<Game[]> = new EventEmitter;

  fourthFormResults : Game = new Game('', '', '', 
  [], '', 0, '', '', '');

  gameList : Game[] = [];
  genreList : Genre[] = [
    new Genre('MMORPG'),
    new Genre('RPG'),
    new Genre('FPS'),
    new Genre('Sandbox'),
    new Genre('Sport'),
    new Genre('Moba'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() : void {
    this.sendFourthForm.emit(this.gameList);
  }

  nextGame() : void {
    this.gameList.push({...this.fourthFormResults});
    console.log(this.fourthFormResults);
    
    console.log(this.gameList);
  }
}
