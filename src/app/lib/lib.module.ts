import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressStepperComponent } from './progress-stepper/progress-stepper.component';



@NgModule({
  declarations: [ProgressStepperComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgressStepperComponent]
})
export class LibModule { }
