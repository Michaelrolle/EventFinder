import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../shared/services/concert.service';
import { Observable } from 'rxjs';
import { Detail } from '../shared/model/detail.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Favoriet } from '../shared/model/favoriet.model';
import { AuthService } from '../shared/services/auth/auth.service.service';
import { Concert } from '../shared/model/concert.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  /* Observable van favorieten */
  public favorieten$: Observable<Favoriet[]>;

  /* Observable van concerten */
  public concert$: Observable<Concert[]>;

  /* Variabelen voor te checken van tickets */
  typeTickets: string = "Tickets";
  SoldOut: string = "Sold Out";

  /* Image generaten voor datum */
  cardLink: string = "https://dummyimage.com/100x100/FFA500/000000.png&text=";
  cardText: string = "+";

  constructor(private concertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    /* Pagina wordt alleen geladen als de gebruiker ingelogd is, 
    anders worden ze doorverwezen naar de login pagina */
    if (!this.authService.isLoggedIn) {
      {this.router.navigate(['../login'])}
    }
    else {
      this.favorieten$ = this.concertService.getFavie();
    }
  }

  /* Functie voor het verwijderen van een favorieten
  Verwijzing in een button */
  removeFavieJSON(value: number) {       
    console.log("Try to remove from favies", value);
    this.concertService.removeFavie(value).subscribe(res => console.log)
  }

  /* Functie voor concert op te roepen van opgeslagen artiesten */
  getConcert(value: string) {
    this.concert$ = this.concertService.getConcert(value);
  }

}
