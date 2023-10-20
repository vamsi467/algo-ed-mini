import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/questions';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges {
  @Input() questionData: Question | undefined;
  selectedAnswers: string[] = [];
  selectedAnswer: string = ''

  @Output() answerSelected = new EventEmitter<string[]>();


  ngOnChanges(changes: SimpleChanges): void {
    this.selectedAnswers = [];
    this.selectedAnswer = ''
  }
  onSelect(answer: string): void {

    if (this.questionData?.type === 'mcq_multiple') {
      if (!this.selectedAnswers.includes(answer)) {
        this.selectedAnswers.push(answer);
      } else {
        this.selectedAnswers.splice(this.selectedAnswers.indexOf(answer), 1);
      }
      this.answerSelected.emit(this.selectedAnswers);
    }
    else {
      this.selectedAnswer = answer
      this.answerSelected.emit([this.selectedAnswer]);
    }
  }
}
