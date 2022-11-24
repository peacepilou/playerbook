import { Injectable } from '@angular/core';
import { Genre } from 'src/models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GenreListService {

  genreList : Genre[] = [
    new Genre('MMORPG', [],0),
    new Genre('RPG', [],1),
    new Genre('FPS', [],2),
    new Genre('Sandbox', [],3),
    new Genre('Sport', [],4),
    new Genre('Moba', [],5)
  ];

  constructor() { }

getGenreList(){
  return this.genreList;
}

}
