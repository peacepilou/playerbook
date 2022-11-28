import { Game } from "./game.model";


export class UserGameInfo{
    constructor(
        
        public userPseudo : string,
        public guild?: string,
        public level?: number,
        public pilouRank?: string,
        public difficulty?: string,
        public serverName?: string,
        public id? : number,
        public game?: Game | null // Switched into optionnal in order to be able to nullable it before send a POST request
    ){}
}