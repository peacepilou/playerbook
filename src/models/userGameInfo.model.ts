

export class UserGameInfo{
    constructor(
        
        public userPseudo : string,
        public guild?: string,
        public level?: number,
        public pilouRank?: string,
        public difficulty?: string,
        public serverName?: string,
        public id? : number
    ){}
}