export class PlayerHabit{
    constructor(
        public frequencyPerWeek: number,
        public isNocturnal: boolean,
        public sessionDurationInHour: number,
        public isHotBlooded: boolean,
        public isLeader: boolean,
        public pvpFriendly: boolean,
        public pveFriendly: boolean
    ){}
}