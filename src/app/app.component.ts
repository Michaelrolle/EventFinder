import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth/auth.service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Event Finder';

  constructor(private authService: AuthService) { }
   
}
