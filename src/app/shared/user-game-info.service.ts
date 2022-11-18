import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Injectable({
  providedIn: 'root'
})
export class UserGameInfoService {

  private baseUrl: string = 'http://localhost:8080';

  private usergameinfoRoad: string = '/api/usergameinfo'

  constructor(private usergameinfoHttp: HttpClient) {}

  postNewUserGameInfo(body: UserGameInfo): Observable<UserGameInfo> {
    return this.usergameinfoHttp.post<UserGameInfo>(`${this.baseUrl}${this.usergameinfoRoad}/add`, body);
  }
}
