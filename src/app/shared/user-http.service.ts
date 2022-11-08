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
  private baseUrl: string = 'http://localhost:3000/user';

  private userId: number | undefined;

  private body: User = new User(0, '', '', '', '',
  new UserBehavior(0, false, false, false, false, ''),
  new PlayerHabit(0, 0, 0, false, false, false, false, false),
  [],
  []
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

  getUserById(userId: number | undefined): Observable<User> {
    return this.userHttp.get<User>(`${this.baseUrl}/${userId}`);
  }

  updateUserById(body : User, userId: number): Observable<User> {
    return this.userHttp.put<User>(`${this.baseUrl}/${userId}`, body);
  }

  deleteUserById(userId: number | undefined): Observable<User> {
    return this.userHttp.delete<User>(`${this.baseUrl}/${userId}`);
  }
}
