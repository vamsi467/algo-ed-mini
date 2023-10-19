import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {
  @Input() questionData: any;
  selectedAnswer: string = '';

  @Output() answerSelected = new EventEmitter<string>();

  onSelect(answer: string): void {
    this.selectedAnswer = answer;
    this.answerSelected.emit(this.selectedAnswer);
  }
}
