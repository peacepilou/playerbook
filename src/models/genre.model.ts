import { Game } from "./game.model";

export class Genre{
    constructor(
        
        public name: string,
        public gameList : Game[],
        public id? : number
    ) {}
}