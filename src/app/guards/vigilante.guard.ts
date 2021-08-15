import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service'

@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate, CanActivateChild {

  constructor(public authService: AuthService, private route: Router){}

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

     if(sessionStorage.getItem("x-access-token")){
       this.authService.check();
       return true
     }else{
      this.route.navigate(['/auth/login']);
      return false;
     }

  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }

}
