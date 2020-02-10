export class Concert {
    constructor (
        public id: string,
        public datetime: string,
        public venue: any,
        public offers: any,
        public on_sale_datetime: string,
        public artist: any,
        public artist_id: string
    ) {}
}