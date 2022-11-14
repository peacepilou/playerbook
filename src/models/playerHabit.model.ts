export class PlayerHabit{
    constructor(
        public id : number,
        public frequencyPerWeek: number,
        public sessionInHours: number,
        public nocturnal: boolean,
        public hotBlooded: boolean,
        public leader: boolean,
        public pve: boolean,
        public pvp: boolean
    ){}
}