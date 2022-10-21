import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameHttpService {

  private baseUrl: string = 'http://localhost:3000/game';

  constructor(private gameHttp : HttpClient) { }

  getGameList() : Observable<any> {
    return this.gameHttp.get(this.baseUrl);
  }
}
