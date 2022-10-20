import { Game } from "./game.model";

export class SecondFormResults{
    constructor(
        public frequency : string,
        public sessionDuration : string,
        public pveFriendly : boolean,
        public pvpFriendly : boolean,
        public isLeader : boolean,
        public isNocturnal : boolean,
        public isHotBlooded : boolean,
        public games : Game[]
    ){}
}