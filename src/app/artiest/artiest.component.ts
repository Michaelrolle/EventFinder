import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../shared/services/concert.service';
import { Observable } from 'rxjs';
import { Detail } from '../shared/model/detail.model';
import { Routes, RouterModule, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-artiest',
  templateUrl: './artiest.component.html',
  styleUrls: ['./artiest.component.css']
})
export class ArtiestComponent implements OnInit {

  public detail$ : Observable<Detail[]>
  naam: string = this.route.snapshot.params.naam;

  constructor(concertService: ConcertService) { }
  
  

  ngOnInit() {
  }

}
