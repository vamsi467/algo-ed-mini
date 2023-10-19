import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.scss']
})
export class ProgressStepperComponent {
  @Input() currentStep: number = 1;
  @Input() totalSteps: number = 15;
}
