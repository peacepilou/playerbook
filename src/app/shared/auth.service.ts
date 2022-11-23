import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUser } from 'src/models/appUser.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private baseUrl: string = 'http://localhost:8080';

  constructor(private userHttp: HttpClient) { }


  authentication(username : string, password : string) : Observable<any>{
    const userLogs : HttpParams = 
    new HttpParams()
    .set("username", username)
    .set("password", password)
    return this.userHttp.post<any>(`${this.baseUrl}/login`, userLogs);
  }
}
