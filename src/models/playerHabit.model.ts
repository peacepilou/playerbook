export class PlayerHabit{
    constructor(
        public frequency: string,
        public isNocturnal: boolean,
        public sessionDuration: string,
        public isHotBlooded: boolean,
        public isLeader: boolean,
        public pvpFriendly: boolean,
        public pveFriendly: boolean
    ){}
}