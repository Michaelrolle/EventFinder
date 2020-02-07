export class Detail {
    constructor (
        //Jaar dat artiest gestart is
        public intFormedYear: string,
        //jaar dat artiest gestopt is
        public strDisbanded: string,
        //genre van de artiest
        public strGenre: string,
        //bij welke mood je het beste luistert naar de artiest
        public strMood: string,
        //de website van de artiest
        public strWebsite: string,
        //facebook pagina van de artiest
        public strFacebook: string,
        //twitter pagina van de artiest
        public strTwitter: string,
        //Biography (in het engels) van de artiest
        public strBiographyEN: string,
        //aantal leden als het een band is
        public intMemmbers: string,
        //van welke land de band is
        public strCountry: string,
        //thumbnail van de artiest
        public strArtistThumb: string,
        //link naar de FM chart van de artiest
        public strLastFMChart: string
    ) {}
}