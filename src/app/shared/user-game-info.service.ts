import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserGameInfo } from 'src/models/userGameInfo.model';


@Injectable({
  providedIn: 'root'
})
export class UserGameInfoService {

  private baseUrl: string = 'http://localhost:8080';

  private userGameInfoUrl: string = '/api/usergameinfo'

  constructor(private userGameInfoHttp: HttpClient) {}

  postNewUserGameInfo(body: UserGameInfo, gameId: number, userId: number): Observable<UserGameInfo> {
    return this.userGameInfoHttp.post<UserGameInfo>(`${this.baseUrl}${this.userGameInfoUrl}/add/${gameId}/${userId}`, body);
  }

  getUserGameInfoList(): Observable<UserGameInfo[]> {
    return this.userGameInfoHttp.get<UserGameInfo[]>(`${this.baseUrl}${this.userGameInfoUrl}`);
  }

  deleteUserGameInfoById(id: number | undefined): Observable<UserGameInfo> {
    return this.userGameInfoHttp.delete<UserGameInfo>(`${this.baseUrl}${this.userGameInfoUrl}/${id}`);
  }

  putUserGameInfoById(id: number, body: UserGameInfo): Observable<UserGameInfo> {
    return this.userGameInfoHttp.put<UserGameInfo>(`${this.baseUrl}${this.userGameInfoUrl}/${id}`, body);
  }

}
