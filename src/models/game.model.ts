import { Genre } from "./genre.model";
import { User } from "./user.model";

export class Game{
    constructor(
        public id : number,
        public name: string,
        public photoUrl: string,
        public gameUrl : string,
        public genreList : Genre[],
        public userList : User[]
    ){}
}