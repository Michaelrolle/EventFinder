import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ConcertService } from '../shared/services/concert.service'
import { Concert } from '../shared/model/concert.model';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {
  public concert$: Observable<Concert[]>;

  constructor(private ConcertService: ConcertService) { }

  ngOnInit() {
  }

  zoek(keyword: string) {
    console.log(keyword);

    this.concert$ = this.ConcertService.getConcert(keyword);

    this.concert$.subscribe( res => console.log(res));
  }

}
