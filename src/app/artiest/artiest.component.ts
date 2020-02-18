import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../shared/services/concert.service';
import { Observable } from 'rxjs';
import { Detail } from '../shared/model/detail.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Favoriet } from '../shared/model/favoriet.model';
import { AuthService } from '../shared/services/auth/auth.service.service';
import { stringify } from 'querystring';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestComponent implements OnInit {

  /* Observable voor details */
  public detail$: Observable<Detail[]>

  /* Observable voor favorieten */
  public favorieten$: Observable<any[]>;

  /* Naam krijgen via dynamic routing */
  naam: string = this.route.snapshot.params.naam;  

  webLink: string = "https://"

  constructor(private concertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private http: HttpClient) { }

  /* Artiest toevoegen aan favoriet met user email, artiest naam en artiest image */
  addFavie(user: string, artist: string, image: string) {
    const newFavieJSON = new Favoriet(null, user, artist, image);
    this.concertService.addFavieJSON(newFavieJSON)
      .subscribe((addedFavie) => {
        this.favorieten$ = this.concertService.getFavie();
      });
  }

  ngOnInit() {
    /* console.log(this.naam) */

    /* Details ophalen */
    this.detail$ = this.concertService.getDetails(this.naam);
    /* this.detail$.subscribe(res => console.log(res[0])); */
  }
}
