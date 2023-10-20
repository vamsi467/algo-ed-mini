import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProgressStepperComponent } from 'src/app/lib/progress-stepper/progress-stepper.component';
import { Question } from 'src/app/questions';
import { QuizDataService } from 'src/app/services/quiz-data.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[] = []
  currentQuestionIndex: number = 0;
  selectedAnswer: string[] = [];
  @ViewChild(ProgressStepperComponent)
  stepper: ProgressStepperComponent = new ProgressStepperComponent;
  constructor(private _quizDataService: QuizDataService, private router: Router,) {

  }
  ngOnInit(): void {
    this.questions = this._quizDataService.getQuestions()
    this._quizDataService.resetQuizData()
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  onSelectAnswer(answer: string[]): void {
    this.selectedAnswer = answer;
  }

  nextQuestion() {
    this.stepper.nextStep()
    this._quizDataService.setUserAnswer(this.currentQuestionIndex, this.selectedAnswer);
    this.currentQuestionIndex++
    this.selectedAnswer = []

  }

  submitQuiz() {
    this.router.navigate(['/results']);
  }

}
