import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import jwt_decode from 'jwt-decode';
import { Token } from 'src/models/token.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const token = localStorage.getItem('tokenId') as string;
    
    const jwtTokenDecoded: Token = jwt_decode(token);

    const adminFound = jwtTokenDecoded.roles.find((role) => {
      return role === 'ROLE_ADMIN';
    });

    const wait = (num: number) =>
      new Promise((res, rej) => {
        setTimeout(() => res(num), num * 1000);
      });

    if (adminFound) {
      return true;
    } else {
      wait(1).then(() => this.router.navigateByUrl('/bad-request'));
      wait(3).then(() => this.router.navigateByUrl('/'));
      return false;
    }
  }
}
