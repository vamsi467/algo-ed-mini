import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  private userDetailsSubject = new BehaviorSubject<any>({});
  userDetails$ = this.userDetailsSubject;

  setUserDetails(details: any): void {
    this.userDetailsSubject.next(details);
  }
}
