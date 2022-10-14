import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {
  private baseUrl: string = 'http://localhost:3000/user';

  private userId: number | undefined;

  private body: any

  constructor(private userHttp: HttpClient) {}

  getUserList(): Observable<any> {
    return this.userHttp.get<any>(`${this.baseUrl}`);
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
