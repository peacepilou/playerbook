export class PlayerHabit{
    constructor(
        public id : number,
        public frequencyPerWeek: number,
        public sessionDurationInHour: number,
        public isNocturnal: boolean,
        public isHotBlooded: boolean,
        public isLeader: boolean,
        public isPVP: boolean,
        public isPVE: boolean
    ){}
}