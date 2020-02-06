import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service';
import { Concert } from '../shared/model/concert.model';

@Component({
  selector: 'app-concert',
  templateUrl: './concert.component.html',
  styleUrls: ['./concert.component.css']
})
export class ConcertComponent implements OnInit {

  public concert$: Observable<Concert[]>;

  zoekterm: string;

  constructor(private ConcertService: ConcertService) { }

  ngOnInit() {

    this.concert$ = this.ConcertService.getConcert(this.zoekterm);

    this.concert$.subscribe( res => console.log(res));
  }

}
