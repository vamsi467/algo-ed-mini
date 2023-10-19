import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results.component';
import { ScoreDisplayComponent } from './score-display/score-display.component';
import { DomainAnalysisComponent } from './domain-analysis/domain-analysis.component';


@NgModule({
  declarations: [
    ResultsComponent,
    ScoreDisplayComponent,
    DomainAnalysisComponent
  ],
  imports: [
    CommonModule,
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
