import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private role: 'admin' | 'professeur' | 'eleve' = 'eleve'
  constructor() { }

  getRole(){
    return this.role;
  }

  setRole(role: 'admin' | 'professeur' | 'eleve'){
    this.role = role;
  }
}
