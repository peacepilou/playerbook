import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/appUser.model';

@Injectable({
  providedIn: 'root',
})
export class UserHttpService {

  private baseUrl: string = 'http://localhost:8080';

  private userRoad: string = '/api/user'

  constructor(private userHttp: HttpClient) {}

  postNewUser(body: AppUser): Observable<AppUser> {
    return this.userHttp.post<AppUser>(`${this.baseUrl}${this.userRoad}/add`, body);
  }

  getUserList(): Observable<AppUser[]> {
    return this.userHttp.get<AppUser[]>(`${this.baseUrl}${this.userRoad}`);
  }

  getUserById(userId: number | undefined): Observable<AppUser> {
    return this.userHttp.get<AppUser>(`${this.baseUrl}${this.userRoad}/${userId}`);
  }

  updateUserById(body: AppUser, userId: number): Observable<AppUser> {
    return this.userHttp.put<AppUser>(`${this.baseUrl}${this.userRoad}/${userId}`, body);
  }

  deleteUserById(userId: number | undefined): Observable<AppUser> {
    return this.userHttp.delete<AppUser>(`${this.baseUrl}${this.userRoad}/${userId}`);
  }
}
