import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  getUserList(): Observable<User[]> {
    return this.userHttp.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(): Observable<any> {
    return this.userHttp.get<any>(`${this.baseUrl}/${this.userId}`);
  }

  updateUserById(): Observable<any> {
    return this.userHttp.put<any>(`${this.baseUrl}/${this.userId}`, this.body);
  }

  deleteUserById(): Observable<any> {
    return this.userHttp.delete<any>(`${this.baseUrl}/${this.userId}`);
  }
}
