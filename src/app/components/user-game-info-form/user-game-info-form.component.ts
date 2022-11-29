import { Component, OnInit, EventEmitter, Output, Input, OnChanges } from '@angular/core';
import { GameListService } from 'src/app/shared/game-list.service';
import { UserGameInfoService } from 'src/app/shared/user-game-info.service';
import { Game } from 'src/models/game.model';
import { UserGameInfo } from 'src/models/userGameInfo.model';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-user-game-info-form',
  templateUrl: './user-game-info-form.component.html',
  styleUrls: ['./user-game-info-form.component.scss']
})
export class UserGameInfoFormComponent implements OnInit, OnChanges {

  @Input()
  userId : number | undefined;

  @Output() sendUserGameInfoForm : EventEmitter<UserGameInfo> = new EventEmitter;

  @Input() gameToUpdateChild: UserGameInfo = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));

  userGameInfo: UserGameInfo = new UserGameInfo(0,'', '', 0, '', '', '', 0, new Game('', '', '', [], [], 0));
  userGameInfoList : UserGameInfo[] = [];

  gameList: Game[] = []
  
  isAddGameFormVisible: boolean = true;

  constructor(private httpGameS : GameListService, 
              private httpUserGameInfoS : UserGameInfoService, 
              private toast: HotToastService) {}

  ngOnInit(): void {
    this.httpGameS.getGameList().subscribe((data) => {
      this.gameList = data;
     });
  }

  ngOnChanges(): void {
    this.userGameInfo = this.gameToUpdateChild;    
  }

  closeInfoForm(): void {
    this.sendUserGameInfoForm.emit(this.userGameInfo);
    this.isAddGameFormVisible = !this.isAddGameFormVisible;
  }

  nextGame() : void {
    this.userGameInfoList.push({...this.userGameInfo});
  }

  sendUserGameInfo() : void {
    if(this.userGameInfo.id){
      // Fully working!
      this.update();
    } else {
      // Working BUT you can't create TWO userGameInfo objects with the SAME Game object id. 
      // I don't know why yet but it's friday night and I've just succeed in debuging the current PUT request 😈😈😈
      this.post();
    }
  }

  update(): void {
    const objectToUpdate: UserGameInfo = this.copyUserGameInfoObjectAndDeleteUselessKeys(this.userGameInfo);
    this.httpUserGameInfoS.putUserGameInfoById(this.userGameInfo.id as number, objectToUpdate).subscribe(() => {
      this.closeInfoForm();
      this.addGameToast()
    })
  }

  post(): void {
    // We will post the UserInfo object without the Game object. So in order to still do so, we get the id of the Game we want to bind to this UserInfo
    // We will pass this id as a URL paramter in our Backend. 
    // Our backend will get it with the @Path variable
    // Then, with the UserInfoService, we will retrieve the matching Game object with this precise id
    // And we will use UserInfo.setGame(GameRetrievedFromDatabaseThanksToTheIdPassedByURLParameter)
    // It's currently changed and working in the backend to match with the frontend
    // I also had to slightly change the UserGameInfo model in order to bind the Game object as a optionnal parameter.
    const gameIdToFindInDB = this.userGameInfo.game ? this.userGameInfo.game.id : 0; 
    const objectToPost: UserGameInfo = this.copyUserGameInfoObjectAndDeleteUselessKeys(this.userGameInfo);
    console.log(objectToPost);
    
    this.httpUserGameInfoS.postNewUserGameInfo(objectToPost, gameIdToFindInDB as number).subscribe((d) => {
      this.closeInfoForm();
    })
  }
  
  copyUserGameInfoObjectAndDeleteUselessKeys(userGameInfo: UserGameInfo): UserGameInfo {
    const userGameInfoCopy = {...userGameInfo}; // Not alterate the main object currently displayed in the form
    userGameInfoCopy.ownerId = this.userId
    delete userGameInfoCopy.game; // Because it's the root of the problem
    delete userGameInfoCopy.id; // Because it's self handled by the backend
    return userGameInfoCopy; // Because we love functionnal approach
  }

  addGameToast() {
    this.toast.success('Nouveau jeu ajouté dans ton profil !', {
      position: 'bottom-right',
      style: {
        border: '1px solid #8738BB',
        color: '#FFFFFF',
        background: "#8738BB"
      }
    });
  }

  

  test(){
    console.log(this.userId);
    
  }
}
