import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtiestComponent } from './artiest/artiest.component';
import { ConcertComponent } from './concert/concert.component';
import { LiedComponent } from './lied/lied.component';
import { AboutComponent } from './about/about.component';
import { ZoekComponent } from './zoek/zoek.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule } from '@angular/common/http';

import { Routes, RouterModule } from '@angular/router';

import { ConcertService } from './shared/services/concert.service';

import { FormsModule } from '@angular/forms';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { UserComponent } from './user/user.component';

/* De routes */
const routes: Routes = [
  { path: "", redirectTo: 'zoek', pathMatch: 'full' },
  { path: 'artiest/:naam', component: ArtiestComponent },
  { path: 'concert/:naam', component: ConcertComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'zoek', component: ZoekComponent },
  { path: 'user', component: UserComponent },

  /* Stuurt mensen automatisch naar de zoek pagina als ze geen naam ingeven vanboven */
  { path: 'artiest', component: ZoekComponent },
  { path: 'concert', component: ZoekComponent },

  /* Dit zorgt er voor dat mensen geen foutieve links kunnen invoegen / aanpasssen in de url vanboven */
  { path: '**', component: ErrorPaginaComponent},
];

/* Config voor Firebase */
const config = {
  apiKey: "AIzaSyAzzjvY0j7ed6UP4lOeQXPPms1FAhz7Vjw",
  authDomain: "eventfinder-1e761.firebaseapp.com",
  databaseURL: "https://eventfinder-1e761.firebaseio.com",
  projectId: "eventfinder-1e761",
  storageBucket: "eventfinder-1e761.appspot.com",
  messagingSenderId: "776768031769",
  appId: "1:776768031769:web:c19dc66c273ef2630b6e88"
}

@NgModule({
  declarations: [
    AppComponent,
    ArtiestComponent,
    ConcertComponent,
    LiedComponent,
    AboutComponent,
    ZoekComponent,
    LoginComponent,
    ErrorPaginaComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  providers: [ConcertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
