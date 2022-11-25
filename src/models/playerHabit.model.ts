export class PlayerHabit{
    constructor(
  
        public frequencyPerWeek: number,
        public sessionInHours: number,
        public nocturnal: boolean,
        public hotBlooded: boolean,
        public leader: boolean,
        public pve: boolean,
        public pvp: boolean,
        public id? : number,
    ){}
}