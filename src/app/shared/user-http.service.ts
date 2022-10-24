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

  private body: User = new User(
    0, '', '', '', '', 
    new UserBehavior(false, false, false, false, ''), 
    new PlayerHabit(0, false, 0, false, false, false, false), []
  )

  constructor(private userHttp: HttpClient) {}

  getUserList(): Observable<User[]> {
    return this.userHttp.get<User[]>(`${this.baseUrl}`);
  }

  getUserById(): Observable<User> {
    return this.userHttp.get<User>(`${this.baseUrl}/${this.userId}`);
  }

  updateUserById(): Observable<User> {
    return this.userHttp.put<User>(`${this.baseUrl}/${this.userId}`, this.body);
  }

  deleteUserById(): Observable<User> {
    return this.userHttp.delete<User>(`${this.baseUrl}/${this.userId}`);
  }
}
