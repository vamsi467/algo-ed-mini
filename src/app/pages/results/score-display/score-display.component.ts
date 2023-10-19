import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.scss']
})
export class ScoreDisplayComponent {
  @Input() score: number = 0;
  @Input() totalQuestions: number = 5;
}
