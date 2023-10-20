import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizGuard } from './quiz.guard';

const routes: Routes = [
  { path: 'start', loadChildren: () => import('./pages/start/start.module').then(m => m.StartModule) },
  { path: 'quiz', loadChildren: () => import('./pages/quiz/quiz.module').then(m => m.QuizModule), canActivate: [QuizGuard] },
  { path: 'results', loadChildren: () => import('./pages/results/results.module').then(m => m.ResultsModule) },
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: '**', redirectTo: '/start' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
