import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private baseUrl: string = 'http://localhost:3000/user';

  private userId: number | undefined;

  private body: User

  constructor(private userHttp: HttpClient) {}

  getUserList(): Observable<User> {
    return this.userHttp.get<User>(`${this.baseUrl}`);
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
