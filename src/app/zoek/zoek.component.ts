import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Routes, RouterModule, Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.css']
})
export class ZoekComponent implements OnInit {
  
  /* Declaratie van de zoekterm */
  public zoekTerm: string;

  /* Weet niet of dit nog nodig is, effe uit commenten */
   /* @Output() zoekEvent = new EventEmitter(); */

  constructor(private route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }

  zoek(keyword: string) {
    /* console.log(keyword); */

    /* Plaatst de meegekregen waarden in een gedeclareerde string */
    this.zoekTerm = keyword;

    /* Hierdoor geeft het een foutmelding als niks is ingevuld */
    if (this.zoekTerm == null) {
      alert("You need to fill in a name first");
    }
    else {
      /* Zorgt ervoor dat spaties geconverteerd worden naar %20, anders werken de API links nie */
      this.zoekTerm = encodeURIComponent(this.zoekTerm);

      /* this.zoekEvent.emit(this.zoekTerm); */

      /* Stuurt de gebruiker naar de artiesten pagina */
      this.router.navigate(['../artiest', this.zoekTerm]);
    }
  }
}
