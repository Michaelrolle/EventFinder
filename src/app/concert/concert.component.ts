import { Component, OnInit, Input } from '@angular/core';

import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service';
import { Concert } from '../shared/model/concert.model';
import { Detail } from '../shared/model/detail.model';

import {Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  public concert$: Observable<Concert[]>;
  public detail$: Observable<Detail[]>;

  naam: string = this.route.snapshot.params.naam;

  constructor(private ConcertService: ConcertService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.naam);

    this.concert$ = this.ConcertService.getConcert(this.naam);
    this.detail$ = this.ConcertService.getDetails(this.naam);
  }

}
