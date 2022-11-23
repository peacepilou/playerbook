import jwt_decode from "jwt-decode";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.scss']
})
export class ConnexionFormComponent implements OnInit {

  user : string = '';
  password : string = '';

  jwtToken : string = '';
  decodedToken : string = '';

  constructor(
    private authS : AuthService,
    private httpRoutes : Router) { }

  ngOnInit(): void {
  }

  submitPassword(){
    this.authS.authentication(this.user, this.password)
    .subscribe((jwt) => {
      localStorage.clear();
      this.httpRoutes.navigateByUrl('/home');
      this.jwtToken = jwt.access_token;
      localStorage.setItem("tokenId", jwt.access_token);
      this.decodedToken = jwt_decode(this.jwtToken);
      console.log(this.decodedToken);
      
    })
  }
}
