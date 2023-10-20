import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDetailsService } from './services/user-details.service';

@Injectable({
  providedIn: 'root'
})
export class QuizGuard implements CanActivate {

  constructor(private router: Router, private userDetailsService: UserDetailsService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userDetails = this.userDetailsService.userDetails$.getValue();
    console.log(userDetails)
    if (userDetails && userDetails.fullName && userDetails.email) {


      return true;
    }
    this.router.navigate(['/start']);
    return false;
  }

}
