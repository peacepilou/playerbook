import { Component, OnInit } from '@angular/core';
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

  constructor() {}

  ngOnInit(): void {
    this.readToken();
    this.checkAdmin();
  }

  readToken(): void {
    const token = localStorage.getItem('tokenId') as string;
    this.jwtTokenDecoded = jwt_decode(token);
  }

  checkAdmin() {
    const adminFound = this.jwtTokenDecoded.roles.find((role) => {      
      return role === "ROLE_ADMIN";
    });    
    if (adminFound) {
      this.isAdmin = true;
    }
  }
}
