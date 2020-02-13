import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, findIndex } from 'rxjs/Operators';

import { Concert } from '../model/concert.model';
import { Detail } from '../model/detail.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  /* URL's voor de API voor concert gegevens op te halen */
  url: string = "https://rest.bandsintown.com/artists/"
  url2: string = "/events?app_id=203c016053ee323a675c4feb27c83204&date=upcoming";

  /* URL voor de API voor data over artiesten */
  urlartiest: string = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";

  /* URL naar de json file */
  urlfavorieten: string = "http://localhost:3000/favorieten";

  /* URL + artiest naam + URL2 = Complete url voor Concert API */
  artiest: string;

  /* UrlArtiest + artiest naam = Complete URL voor Artiest API */
  detailurl: string;

  constructor(private http: HttpClient) {}

  /* Haalt de concerten op uit de API */
  getConcert(keyword): Observable<Concert[]> {
    this.artiest = this.url + keyword + this.url2;

    /* console.log(this.artiest); */

    return this.http
      .get<Concert[]>(this.artiest)
      .pipe();
  }

  // Venue gegevens ophalen
  getConcertOffers(keyword): Observable<any[]> {
    this.artiest = this.url + keyword + this.url2;

    /* console.log(this.artiest); */

    return this.http
      .get<any[]>(this.artiest)
      .pipe(map(res => res[0]['offers']));
  } 

  /* Artiest details ophalen */
  getDetails(keyword): Observable<Detail[]> {
    this.detailurl = this.urlartiest + keyword ;

    return this.http
      .get<Detail[]>(this.detailurl)
      .pipe(map(res => res['artists']));
  }

  /* Gegevens toevoegen aan de favorieten (json) */
  addFavieJSON(value): Observable<any> {
    const headers = new HttpHeaders().set("Content-type", "application/json");
    return this.http.post(this.urlfavorieten, value);
  }

  /* Favorieten ophalen uit de JSON file */
  getFavie(): Observable<any[]> {
    return this.http
      .get<any[]>(this.urlfavorieten)
      .pipe(tap(result => console.log("via json-server: ", result)));
  }

  /* Favoriet verwijderen op basis van de ID */
  removeFavie(value: number) {

    const url2 = `${this.urlfavorieten}/${+value}`;

    /* console.log(value, url2); */

    return this.http.delete(url2).pipe();
  }

}
