import { Injectable } from '@angular/core';
import { Game } from 'src/models/game.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class GameListService {

  private baseUrl: string = 'http://localhost:8080';

  private gameRoad: string = '/api/game'


  constructor(private gameHttp: HttpClient) {}

  getGameList(): Observable<Game[]> {
    return this.gameHttp.get<Game[]>(`${this.baseUrl}${this.gameRoad}`);
  }


}
