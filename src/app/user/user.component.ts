import { Component, OnInit } from '@angular/core';
import { ConcertService } from '../shared/services/concert.service';
import { Observable } from 'rxjs';
import { Detail } from '../shared/model/detail.model';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { Favoriet } from '../shared/model/favoriet.model';
import { AuthService } from '../shared/services/auth/auth.service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public favorieten$: Observable<Favoriet[]>;

  constructor(private concertService: ConcertService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    if (!this.authService.isLoggedIn) {
      {this.router.navigate(['../login'])}
    }
    else {
      this.favorieten$ = this.concertService.getFavie();
    }
  }

  removeFavieJSON(value: number) {       
    console.log("Try to remove from favies", value);
    this.concertService.removeFavie(value).subscribe(res => console.log)
  }

}
