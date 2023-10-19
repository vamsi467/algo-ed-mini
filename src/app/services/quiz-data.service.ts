import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Question, questions } from '../questions';

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  private questions: Question[] = [...questions];

  private userAnswersSubject = new BehaviorSubject<string[][]>([]);
  userAnswers$ = this.userAnswersSubject.asObservable();

  private scoreSubject = new BehaviorSubject<number>(0);
  score$ = this.scoreSubject.asObservable();

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  setUserAnswer(questionIndex: number, answer: string[]): void {
    const currentAnswers = this.userAnswersSubject.value;
    currentAnswers[questionIndex] = answer;
    this.userAnswersSubject.next(currentAnswers);
  }

  calculateScore(): void {
    let score = 0;
    this.userAnswersSubject.value.forEach((userAnswer, index) => {
      const correctAnswer = this.questions[index].answer;

      if (JSON.stringify(userAnswer.sort()) === JSON.stringify(correctAnswer.sort())) {
        score++;
      }
    });
    this.scoreSubject.next(score);
  }

  resetQuizData(): void {
    this.userAnswersSubject.next([]);
    this.scoreSubject.next(0);
  }
}
