import jwt_decode from "jwt-decode";
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHttpService } from 'src/app/shared/user-http.service';
import { PlayerHabit } from 'src/models/playerHabit.model';
import { AppUser } from 'src/models/appUser.model';
import { UserBehavior } from 'src/models/userBehavior.model';
import { HotToastService } from '@ngneat/hot-toast';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  @Input()
  userFoundToChild: AppUser = new AppUser('', '', '', '', '',
    new UserBehavior(true, true, true, true, ''),
    new PlayerHabit(2, 3, false, true, true, true, true),
    [],
    []
  );

  jwtTokenDecoded :string  | null= ""

  isOwner : boolean = false;


  constructor(private userApi: UserHttpService, private router: Router, private toast: HotToastService) { }

  ngOnChanges(){
    this.checkUser();
  }
  
  ngOnInit(): void {
    this.readToken();
   }

  readToken(): void {
    const token = localStorage.getItem("tokenId") as string;
    this.jwtTokenDecoded = jwt_decode(token);    
  }

  checkUser(){
    if(this.jwtTokenDecoded){
      this.userFoundToChild.username.toString() === 
      this.jwtTokenDecoded?.sub.toString() ? 
      this.isOwner = true : false;
    }
  }

  delete(): void {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre profil ? ")) {
      this.userApi.deleteUserById(this.userFoundToChild?.id)
        .subscribe(() => { 
          this.router.navigateByUrl("/home");
          this.deleteProfileToast();
          localStorage.clear() 
        })
    }
  }

  deleteProfileToast() {
    this.toast.success('Ton profil a été supprimé, tu vas être déconnecté !', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }
}