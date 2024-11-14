import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService } from '../services/auth.service';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
// export class LoginPage implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController,
  ) { }

  async onLogin(){
    /**
     * Valider le nom de d'utilisateur et le mot de passe avec AuthService
     */
    const isValidUser = this.authService.validateUser(this.username, this.password);
    if (isValidUser){
      const role = this.authService.getRole();
      if (role === 'admin'){
      this.router.navigate(['/home-admin']);
    }else if (role === 'professeur'){
      this.router.navigate(['/home-professeur']);
    }else if (role === 'eleve'){
      this.router.navigate(['/home-eleve']);
    }
    
  }else{
    const alert = await this.alertController.create({
      header:'Erreur',
      message:'Nom d\'utilisateur ou mot de passe incorrect.',
      buttons:['OK']
    });
    await alert.present();
  }



}
}