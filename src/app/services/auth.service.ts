import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: 'admin' | 'professeur' | 'eleve' = 'eleve'
  constructor() { }

  validateUser(username:string, password:string):boolean{
    if(username === 'admin' && password === 'adminpass'){
      this.role = 'admin';
      return true;
    }else if (username === 'prof' && password === 'profpass'){
       this.role = 'professeur';
      return true;
    }else if (username === 'eleve' && password === 'elevepass'){
       this.role = 'eleve';
      return true;
    }
    return  false;
  }

  getRole(){
    return this.role;
  }

  setRole(role: 'admin' | 'professeur' | 'eleve'){
    this.role = role;
  }
}
