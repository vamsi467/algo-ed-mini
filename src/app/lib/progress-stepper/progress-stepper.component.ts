import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.scss']
})
export class ProgressStepperComponent implements OnInit, OnDestroy {
  @Input() steps: any[] = [];
  @Output() stepTimedOut = new EventEmitter();
  currentStep: number = 0;
  timeLeft: number = 120;
  timer: any;

  ngOnInit(): void {
    this.startTimer();
    this.timeLeft = this.steps[0].duration;
  }

  startTimer(): void {
    this.timer = setInterval(() => {
      this.timeLeft--;

      if (this.timeLeft <= 0) {
        this.nextStep();
        this.stepTimedOut.emit()
      }
    }, 1000);
  }

  nextStep(): void {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.timeLeft = this.steps[this.currentStep].duration;
    } else {
      this.stopTimer();
    }
  }

  stopTimer(): void {
    clearInterval(this.timer);
  }

  ngOnDestroy(): void {
    this.stopTimer();
  }
}
