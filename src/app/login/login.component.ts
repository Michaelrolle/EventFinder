import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth/auth.service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    public router: Router) { }

  ngOnInit() {
    /* Als de gebruiker al ingelogd is, kunnen ze niet terug naar de login pagina gaan */
    if (this.authService.isLoggedIn) {
      this.router.navigate(['../zoek'])
    }
  }

}
