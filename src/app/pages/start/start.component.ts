import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {

  userDetails: any = null;

  handleUserDetails(user: any): void {
    this.userDetails = user;
    // Here, you may navigate to the quiz component or do some other logic with the received user details.
  }

  startQuiz() {
    // Logic to start the quiz
  }
}
