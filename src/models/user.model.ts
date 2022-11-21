import { Game } from "./game.model";
import { UserBehavior } from "./userBehavior.model";
import { PlayerHabit } from "./playerHabit.model";
import { UserGameInfo } from "./userGameInfo.model";

export class User{
    constructor(
        
        public username: string,
        public password: string,
        public linkAvatar: string,
        public country: string,
        public biography: string,
        public userBehavior: UserBehavior,
        public playerHabits: PlayerHabit,
        public gameList: Game[],
        public userGameInfoList : UserGameInfo[],
        public id?: number
    ){}
}
