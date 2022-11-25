import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-logout-purple-button',
  templateUrl: './logout-purple-button.component.html',
  styleUrls: ['./logout-purple-button.component.scss']
})
export class LogoutPurpleButtonComponent implements OnInit {

  constructor(private router: Router,
    private toast: HotToastService) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('/');
    localStorage.clear();
    this.toast.success('Vous êtes déconnecté.', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }

}
