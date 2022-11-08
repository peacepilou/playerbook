import { Injectable } from '@angular/core';
import { Genre } from 'src/models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreListService {

  genreList : Genre[] = [
    new Genre(0, 'MMORPG', []),
    new Genre(1, 'RPG', []),
    new Genre(2, 'FPS', []),
    new Genre(3, 'Sandbox', []),
    new Genre(4, 'Sport', []),
    new Genre(5, 'Moba', [])
  ];

  constructor() { }

getGenreList(){
  return this.genreList;
}

}
