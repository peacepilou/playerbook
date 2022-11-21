import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  styleUrls: ['./connexion-form.component.scss']
})
export class ConnexionFormComponent implements OnInit {

  password : string = '';
  passwordConfirm : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submitPassword(){
    if(this.password === this.passwordConfirm){
      //🤷
    }
  }
}
