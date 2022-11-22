import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.scss']
})
export class ConnexionFormComponent implements OnInit {

  user : string = '';
  password : string = '';

  constructor(private authS : AuthService) { }

  ngOnInit(): void {
  }

  submitPassword(){
    this.authS.authentication(this.user, this.password)
    .subscribe(() => {
      console.log("Si ceci s'affiche, c'est plutôt bon signe !");
    })
  }
}
