import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { ConcertComponent } from './concert/concert.component';
import { LiedComponent } from './lied/lied.component';
import { AboutComponent } from './about/about.component';
import { ZoekComponent } from './zoek/zoek.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtiestComponent,
    ConcertComponent,
    LiedComponent,
    AboutComponent,
    ZoekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
