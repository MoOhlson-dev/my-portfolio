import { Routes } from '@angular/router';
import {MainPage} from './components/main-page/main-page';
import { ErrorPage } from './components/error-page/error-page';

export const routes: Routes = [

  {
    path: '',
    component: MainPage,
    title: 'Martin Ohlson | Main page',
  },
  {
    path: '**',
    component: ErrorPage,
    title: "Martin Ohlson | Page Not Found"
  }
];
