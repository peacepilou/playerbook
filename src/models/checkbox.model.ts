export class Checkbox {
    constructor(
        public description: string,
        public userProperty: string,
        public isActive: boolean,
        public category: "UserBehavior" | "PlayerHabit"
    ) {}
}