import { Genre } from "./genre.model";
import { AppUser } from "./appUser.model";

export class Game{
    constructor(
        public name: string,
        public photoUrl: string,
        public gameUrl : string,
        public genreList : Genre[],
        public userList : AppUser[],
        public id : number
    ){}
}