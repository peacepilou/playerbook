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

  constructor(
    private authS : AuthService,
    private httpRoutes : Router) { }

  ngOnInit(): void {
  }

  submitPassword(){
    this.authS.authentication(this.user, this.password)
    .subscribe((jwt) => {
      this.httpRoutes.navigateByUrl('/home');
      this.jwtToken = jwt.access_token;
      localStorage.setItem("tokenId", jwt.access_token);
      console.log("test de l'atob", JSON.parse(atob(this.jwtToken))); 
    })
  }
}
