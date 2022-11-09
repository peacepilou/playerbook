import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';

@Injectable({
  providedIn: 'root'
})
export class GameHttpService {

  sourceUrl : string = "http://localhost:8080"

  constructor(private gameHttp : HttpClient) { }

  getGameList() : Observable<Game[]> {
    return this.gameHttp.get<Game[]>(`${this.sourceUrl}/gameList`);
  }

  getGenreList() : Observable<Genre[]> {
    return this.gameHttp.get<Genre[]>(`${this.sourceUrl}/game/genreList`);
  }
}
