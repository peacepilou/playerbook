import { Game } from "./game.model";
import { UserBehavior } from "./userBehavior.model";
import { PlayerHabit } from "./playerHabit.model";

export class User{
    constructor(
        public id: number,
        public name: string,
        public linkAvatar: string,
        public country: string,
        public biography: string,
        public userBehaviorList: UserBehavior,
        public playerHabitList: PlayerHabit,
        public gameList: Game[]
    ){}
}