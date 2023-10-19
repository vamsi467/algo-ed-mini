import { Component, OnInit } from '@angular/core';
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
  selectedAnswers: string[] = [];
  constructor(private _quizDataService: QuizDataService) {

  }
  ngOnInit(): void {
    this.questions = this._quizDataService.getQuestions()
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  onSelectAnswer(answer: string): void {
    this.selectedAnswers[this.currentQuestionIndex] = answer;
  }

  nextQuestion() {
    // Logic to go to the next question
  }

  previousQuestion() {
    // Logic to go to the previous question
  }

  submitQuiz() {
    // Logic to submit the quiz and calculate results
  }

}
