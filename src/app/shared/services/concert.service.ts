import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, findIndex } from 'rxjs/Operators';

import { Concert } from '../model/concert.model';
import { Detail } from '../model/detail.model';
import { Venue } from '../model/venue.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  url: string = "https://rest.bandsintown.com/artists/"
  url2: string = "/events?app_id=203c016053ee323a675c4feb27c83204&date=upcoming";

  urlartiest: string = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=";

  artiest: string;
  detailurl: string;

  constructor(private http: HttpClient) {}

  getConcert(keyword): Observable<Concert[]> {
    this.artiest = this.url + keyword + this.url2;

    console.log(this.artiest);

    return this.http
      .get<Concert[]>(this.artiest)
      .pipe();
  }

  // Venue gegevens ophalen
  getConcertOffers(keyword): Observable<any[]> {
    this.artiest = this.url + keyword + this.url2;

    console.log(this.artiest);

    return this.http
      .get<any[]>(this.artiest)
      .pipe(map(res => res[0]['offers']));
  } 

  getDetails(keyword): Observable<Detail[]> {
    this.detailurl = this.urlartiest + keyword ;

    return this.http
      .get<Detail[]>(this.detailurl)
      .pipe(map(res => res['artists']));
  }

}
