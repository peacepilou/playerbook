export class Token {
    constructor(
        public exp: number,
        public iss: string,
        public roles: string[],
        public sub: string
    ){}
}