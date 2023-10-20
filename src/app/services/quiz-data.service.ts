import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { questions, Question } from '../questions';


export interface IScore {
  'Verbal Reasoning'?: number;
  'Geography'?: number;
  'Aptitude'?: number;
  'Total'?: number;
}

@Injectable({
  providedIn: 'root'
})
export class QuizDataService {

  private questions: Question[] = [...questions];

  private userAnswersSubject = new BehaviorSubject<{ [key: number]: string[] }>({});
  userAnswers$ = this.userAnswersSubject.asObservable();

  private scoreSubject = new BehaviorSubject<IScore>({});
  score$ = this.scoreSubject.asObservable();

  constructor() { }

  getQuestions(): Question[] {
    return this.questions;
  }

  setUserAnswer(questionID: number, answer: string[]): void {
    const currentAnswers = this.userAnswersSubject.value;
    currentAnswers[questionID] = answer;
    this.userAnswersSubject.next(currentAnswers);
  }

  calculateScore(): void {

    const answers = this.userAnswersSubject.getValue();
    console.log('here', answers)
    let scores: IScore = {
      'Verbal Reasoning': 0,
      'Geography': 0,
      'Aptitude': 0,
      'Total': 0,
    };
    let maxScores: IScore = {
      'Verbal Reasoning': 0,
      'Geography': 0,
      'Aptitude': 0,
      'Total': 0,
    };
    let percentScores: IScore = {
      'Verbal Reasoning': 0,
      'Geography': 0,
      'Aptitude': 0,
      'Total': 0,
    };
    this.questions.forEach((question, index) => {
      if (JSON.stringify(answers[index]) === JSON.stringify(question.answer)) {
        if (question.domain in scores) {
          scores[question.domain]! += question.weight;
        }
        scores['Total']! += question.weight;
      }
      maxScores[question.domain]! += question.weight;
      maxScores['Total']! += question.weight;
    });
    Object.keys(percentScores).forEach((ele) => {
      const newEle = ele as 'Verbal Reasoning' | 'Geography' | 'Aptitude' | 'Total'
      percentScores[newEle] = (scores[newEle]! / maxScores[newEle]! * 100);
    })

    this.scoreSubject.next(percentScores)
  }


  resetQuizData(): void {
    this.userAnswersSubject.next({});
    this.scoreSubject.next({});
  }
}
