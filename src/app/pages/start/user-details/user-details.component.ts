import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() userDetailsSubmitted = new EventEmitter<any>();

  onSubmit(): void {
    this.userDetailsSubmitted.emit(this.userDetails);
  }
}
