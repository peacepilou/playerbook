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

  getUserGameInfoList(): Observable<UserGameInfo[]> {
    return this.usergameinfoHttp.get<UserGameInfo[]>(`${this.baseUrl}${this.usergameinfoRoad}`);
  }

  deleteUserGameInfoById(id: number | undefined): Observable<UserGameInfo> {
    return this.usergameinfoHttp.delete<UserGameInfo>(`${this.baseUrl}${this.usergameinfoRoad}/${id}`);
  }

  PutUserGameInfo(id: number | undefined, body: UserGameInfo): Observable<UserGameInfo> {
    return this .usergameinfoHttp.put<UserGameInfo>(`${this.baseUrl}${this.usergameinfoRoad}/${id}`, body);
  }

}
