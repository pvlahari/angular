import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationGuard implements CanActivate {

  constructor(private router:Router) {};

  canActivate(next: ActivatedRouteSnapshot, status: RouterStateSnapshot): boolean {
      let token = localStorage.getItem('token');
      if (token != null) {
        return true;
      } else {
        this.router.navigate(['/contact/signin']);
        return false;
      }
    }

}
