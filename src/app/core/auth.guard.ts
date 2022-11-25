import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

    const token = localStorage.getItem('tokenId');

    const wait = (num: number) =>
      new Promise((res, rej) => {
        setTimeout(() => res(num), num * 1000);
      });

    if (token) {
      return true;
    } else {
      wait(1).then(() => this.router.navigateByUrl('/bad-request'));
      wait(3).then(() => this.router.navigateByUrl('/'));
      return false;
    }
  }
}
