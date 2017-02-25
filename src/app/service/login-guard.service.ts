import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class LoginGuardService implements CanActivate{

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(): boolean {
    if(!this.auth.isLoggedIn()){
      this.router.navigate(['/login']);
        return false;
    }
    return this.auth.isLoggedIn();
  }

}
