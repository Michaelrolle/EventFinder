import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service';
import { Concert } from '../shared/model/concert.model';

import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  public concert$: Observable<Concert[]>;

  naam: string = this.route.snapshot.params.naam;

  constructor(private ConcertService: ConcertService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.naam);

    /* this.concert$ = this.ConcertService.getConcert(this.naam); */
  }

}
