import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { ConcertComponent } from './concert/concert.component';
import { LiedComponent } from './lied/lied.component';
import { AboutComponent } from './about/about.component';
import { ZoekComponent } from './zoek/zoek.component';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule} from '@angular/router';

import { ConcertService } from './shared/services/concert.service';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:"", redirectTo:'zoek', pathMatch:'full'},
  {path: 'artiest/:naam', component: ArtiestComponent},
  {path: 'concert/:naam', component: ConcertComponent},
  {path: 'lied/:naam', component: LiedComponent},
  {path: 'about', component: AboutComponent},
  {path: 'zoek', component: ZoekComponent},
];

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
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [ConcertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
