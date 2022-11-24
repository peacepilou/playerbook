import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.scss']
})
export class LogoutButtonComponent implements OnInit {

  isLogged: boolean = false

  constructor(private router: Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('/');
    localStorage.clear();
    this.toast.success('Vous êtes déconnecté.', {
      position: 'bottom-right',
      dismissible: true,
      style: {
        border: '1px solid #8738BB'
      }
    });
  }
}
