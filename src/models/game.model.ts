import { Genre } from "./genre.model";

export class Game{
    constructor(
        public name: string,
        public url: string,
        public userPseudo: string,
        public genreList: Genre[],
        public guild?: string,
        public level?: number,
        public rank?: string,
        public difficulty?: string,
        public serverName?: string
    ){}
}