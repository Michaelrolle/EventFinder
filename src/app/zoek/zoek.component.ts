import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {
  
  public zoekTerm: string;

  @Output() zoekEvent = new EventEmitter();

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  zoek(keyword: string) {
    console.log(keyword);

    this.zoekTerm = keyword;

    this.zoekEvent.emit(this.zoekTerm);
  }
}
