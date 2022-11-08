

export class UserGameInfo{
    constructor(
        public id : number,
        public userPseudo : string,
        public guild?: string,
        public level?: number,
        public rank?: string,
        public difficulty?: string,
        public serverName?: string
    ){}
}