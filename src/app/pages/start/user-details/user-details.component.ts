import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserDetailsService } from 'src/app/services/user-details.service';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  userDetails = {
    fullName: '',
    email: ''
  };

  constructor(private router: Router, private userDetailsService: UserDetailsService) { }

  onSubmit(): void {
    if (this.userDetails.fullName && this.userDetails.email) {
      this.userDetailsService.setUserDetails(this.userDetails)
      this.router.navigate(['/quiz']);
    }
  }
}
