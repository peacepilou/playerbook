import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {

  private baseUrl: string = 'http://localhost:8080';

  private userRoad: string = '/api/user'

  constructor(private userHttp: HttpClient) {}

  postNewUser(body: User): Observable<User> {
    return this.userHttp.post<User>(`${this.baseUrl}${this.userRoad}/add`, body);
  }

  getUserList(): Observable<User[]> {
    return this.userHttp.get<User[]>(`${this.baseUrl}${this.userRoad}`);
  }

  getUserById(userId: number | undefined): Observable<User> {
    return this.userHttp.get<User>(`${this.baseUrl}${this.userRoad}/${userId}`);
  }

  updateUserById(body: User, userId: number): Observable<User> {
    return this.userHttp.put<User>(`${this.baseUrl}${this.userRoad}/${userId}`, body);
  }

  deleteUserById(userId: number | undefined): Observable<User> {
    return this.userHttp.delete<User>(`${this.baseUrl}${this.userRoad}/${userId}`);
  }
}
