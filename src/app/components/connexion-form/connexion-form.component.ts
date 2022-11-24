import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { HotToastService } from '@ngneat/hot-toast';

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
    private httpRoutes : Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  submitPassword(){
    this.authS.authentication(this.user, this.password)
    .subscribe((jwt) => {
      localStorage.clear();
      this.httpRoutes.navigateByUrl('/home');
      this.showToast();
      this.jwtToken = jwt.access_token;
      localStorage.setItem("tokenId", jwt.access_token);           
    })
  }

  showToast() {
    this.toast.success('Connexion réussie !', {
      position: 'bottom-right',
      dismissible: true,
      style: {
        border: '1px solid #8738BB'
      }
    });
  }

}
