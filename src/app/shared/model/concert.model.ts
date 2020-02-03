export class Concert {
    constructor (
        public id: string,
        public datetime: string,
        public venue: string,
        public offers: string,
        public on_sale_datetime: string
    ) {}
}