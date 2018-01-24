export class Request {
    constructor(
        public id?: number,
        public individualNumber?: string,
        public bankNumber?: string,
        public accountNumber?: string,
        public purposeOfPayment?: string,
        public vat?: number,
        public amount?: number,
        public phoneNumber?: string,
        public email?: string,
    ) { }
}