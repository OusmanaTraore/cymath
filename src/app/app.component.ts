import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from './services/auth.service'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(){
    const role = this.authService.getRole();
    if (role === 'admin'){
      this.router.navigate(['/home-admin']);
    }else if (role === 'professeur'){
      this.router.navigate(['/home-professeur']);
    }else if (role === 'eleve'){
      this.router.navigate(['/home-eleve']);
    }
  }
}
