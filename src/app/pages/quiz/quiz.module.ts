import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question/question.component';
import { LibModule } from '../../lib/lib.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    LibModule,
    FormsModule,
  ]
})
export class QuizModule { }
