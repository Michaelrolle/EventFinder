import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service';
import { Concert } from '../shared/model/concert.model';
import { Favoriet } from '../shared/model/favoriet.model';

import {Routes, RouterModule, ActivatedRoute} from '@angular/router';
import { AuthService } from '../shared/services/auth/auth.service.service';
import { count } from 'rxjs/Operators';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  /* Concert observable */
  public concert$: Observable<Concert[]>;

  /* Variabelen voor tickets te checken */
  typeTickets: string = "Tickets";
  SoldOut: string = "Sold Out";

  /* Test string voor check up van foutief opgegeven artiest */
  FoutieveArtiest: string = "[NotFound] The artist was not found";

  /* Image generaten voor datum */
  cardLink: string = "https://dummyimage.com/100x100/FFA500/000000.png&text=";
  cardText: string = "+";

  /* Naam van artiest krijgen via dynamic routing */
  naam: string = this.route.snapshot.params.naam;

  constructor(
    private ConcertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService
    ) { }

  ngOnInit() {

    /* Concerten ophalen */
    this.concert$ = this.ConcertService.getConcert(this.naam);
    /* this.concert$.subscribe(res => console.log(res)); */
  }

  /* Ticket link openen in een nieuwe pagina */
  onClick(link: string) {
    window.open(link);
  }
}
