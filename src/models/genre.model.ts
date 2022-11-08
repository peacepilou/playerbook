import { Game } from "./game.model";

export class Genre{
    constructor(
        public id : number,
        public name: string,
        public gameList : Game[]
    ) {}
}