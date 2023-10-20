import { Component, OnInit } from '@angular/core';
import { IScore, QuizDataService } from 'src/app/services/quiz-data.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  total: number = 0

  domainScores: any[] = [];

  constructor(private _quizDataService: QuizDataService,) {

  }
  ngOnInit(): void {

    this._quizDataService.calculateScore();
    this._quizDataService.score$.subscribe(ele => {
      console.log(ele)
      this.total = ele.Total || 0

      this.domainScores = Object.keys(ele).filter(key => key !== 'Total').map(key => ({
        name: key,
        score: (ele[key as 'Verbal Reasoning' | 'Geography' | 'Aptitude' | 'Total'])!.toFixed(2),
      }))
    })
  }
}
