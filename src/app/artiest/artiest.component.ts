import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../shared/services/concert.service';
import { Observable } from 'rxjs';
import { Detail } from '../shared/model/detail.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Favoriet } from '../shared/model/favoriet.model';
import { AuthService } from '../shared/services/auth/auth.service.service';

@Component({
  selector: 'app-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestComponent implements OnInit {

  public detail$: Observable<Detail[]>
  public favorieten$: Observable<any[]>;

  naam: string = this.route.snapshot.params.naam;

  constructor(private concertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService) { }

  addFavie(user: string, artist: string, image: string) {
    const newFavieJSON = new Favoriet(null, user, artist, image);
    this.concertService.addFavieJSON(newFavieJSON)
      .subscribe((addedFavie) => {
        this.favorieten$ = this.concertService.getFavie();
      });
  }

  ngOnInit() {
    // console.log(this.naam)
    this.detail$ = this.concertService.getDetails(this.naam);
    this.detail$.subscribe(res => console.log(res[0]));
  }

}
