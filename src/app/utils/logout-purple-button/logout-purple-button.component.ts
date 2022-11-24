import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout-purple-button',
  templateUrl: './logout-purple-button.component.html',
  styleUrls: ['./logout-purple-button.component.scss']
})
export class LogoutPurpleButtonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.router.navigateByUrl('/');
    localStorage.clear();
  }

}
