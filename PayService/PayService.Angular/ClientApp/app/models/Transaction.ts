export class Transaction {
    constructor(
        public id?: number,
        public cardNumber?: string,
        public monthExpired?: string,
        public amount?: number,
        public comment?: string,
        public email?: string,
        public status?: string,
        public created?: Date
    ) { }
}