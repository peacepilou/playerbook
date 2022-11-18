import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameHttpService {

  sourceUrl : string = "http://localhost:8080/"
  pathUrl : string = "api/game"

  constructor(private gameHttp : HttpClient) { }

  getGameList() : Observable<Game[]> {
    return this.gameHttp.get<Game[]>(`${this.sourceUrl}${this.pathUrl}`);
  }

  addNewGame(game : Game) : Observable<Game>{
    return this.gameHttp.post<Game>(`${this.sourceUrl}${this.pathUrl}/add`, game);
  }
}
