import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap, findIndex } from 'rxjs/Operators';

import { Concert } from '../model/concert.model';

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  url: string = "https://rest.bandsintown.com/artists/"
  url2: string = "/events?app_id=203c016053ee323a675c4feb27c83204&date=past";

  artiest: string;

  constructor(private http: HttpClient) {}

  getConcert(keyword): Observable<Concert[]> {
    this.artiest = this.url + keyword + this.url2;

    console.log(this.artiest);

    return this.http
      .get<Concert[]>(this.artiest)
      .pipe(map(res => res[""]));
  }

}
