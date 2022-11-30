import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import jwt_decode from 'jwt-decode';

import { Token } from 'src/models/token.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  jwtTokenDecoded: Token = new Token(0, '', [], '');

  isAdmin: boolean = false;

  userLogged: boolean = false;

  constructor(private router: Router, private toast: HotToastService) {}

  ngOnInit(): void {
    this.readToken();
    this.checkAdmin();
    this.isLogged()
  }

  isLogged(): void{
    const token = localStorage.getItem('tokenId') as string;
    if (token){
      this.userLogged = true;
    }
  }

  readToken(): void {
    const token = localStorage.getItem('tokenId') as string;
    if (token) {
      this.jwtTokenDecoded = jwt_decode(token);
    } 
  }

  checkAdmin() {
    if (this.jwtTokenDecoded.roles) {
      const adminFound = this.jwtTokenDecoded.roles.find((role) => {
        return role === 'ROLE_ADMIN';
      });
      if (adminFound) {
        this.isAdmin = true;
      }
    } 
  }

  logout(): void {
    this.router.navigateByUrl('/');
    localStorage.clear();
    this.toast.success('Déconnexion réussie.', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }
}
