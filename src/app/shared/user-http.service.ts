import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Game } from 'src/models/game.model';
import { Genre } from 'src/models/genre.model';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { User } from 'src/models/user.model';
import { UserBehavior } from 'src/models/userBehavior.model';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private baseUrl: string = 'http://localhost:3000/user';

  private userId: number | undefined;

  private body: User = new User(0,'','','','',
  new UserBehavior(false, false, false, false, ''), 
  new PlayerHabit(0, false, 0, false, false, false, false), 
  [new Game('', '', '', [new Genre('')], '', 0, '', '', '')]
  );


  constructor(private userHttp: HttpClient) {}
  
  postNewUser(body : User): Observable<User> {
    return this.userHttp.post<User>(this.baseUrl, body);
  }

  postUser(): Observable<User> {
    return this.userHttp.post<User>(`${this.baseUrl}`, this.body);
  }

  getUserList(): Observable<User[]> {
    return this.userHttp.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(): Observable<User> {
    return this.userHttp.get<User>(`${this.baseUrl}/${this.userId}`);
  }

  updateUserById(body : User, userId: number): Observable<User> {
    return this.userHttp.put<User>(`${this.baseUrl}/${userId}`, body);
  }

  deleteUserById(userId: number | undefined): Observable<User> {
    return this.userHttp.delete<User>(`${this.baseUrl}/${userId}`);
  }
}
