import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {
  
  public artiestNaam: string;

  constructor() { }

  ngOnInit() {
  }

  zoek(keyword: string) {
    console.log(keyword);

    this.artiestNaam = keyword;

    
  }

}
