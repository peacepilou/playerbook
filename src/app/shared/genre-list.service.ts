import { Injectable } from '@angular/core';
import { Genre } from 'src/models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreListService {

  genreList : Genre[] = [
    new Genre('MMORPG'),
    new Genre('RPG'),
    new Genre('FPS'),
    new Genre('Sandbox'),
    new Genre('Sport'),
    new Genre('Moba')
  ];

  constructor() { }

getGenreList(){
  return this.genreList;
}

}
