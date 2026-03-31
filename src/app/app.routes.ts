import { Routes } from '@angular/router';
import { AboutPage } from './pages/about-page/about-page';
import { HomePage } from './pages/home-page/home-page';
import { LoginPage } from './pages/login-page/login-page';
import { SubscribePage } from './pages/subscribe-page/subscribe-page';
import { AccountManagerPage } from './pages/account-manager-page/account-manager-page';
import { RecipeCalculatorPage } from './pages/recipe-calculator-page/recipe-calculator-page';
import { RecipeManagerPage } from './pages/recipe-manager-page/recipe-manager-page';
import { UsersManagerPage } from './pages/users-manager-page/users-manager-page';
import { IngredientsManagerPage } from './pages/ingredients-manager-page/ingredients-manager-page';
import { LegalNoticePage } from './pages/legal-notice-page/legal-notice-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomePage },
  { path: 'login', component: LoginPage },
  { path: 'subscribe', component: SubscribePage },
  { path: 'account', component: AccountManagerPage, canActivate: [authGuard] },
  { path: 'recipe-calculator', component: RecipeCalculatorPage },
  { path: 'recipe-manager', component: RecipeManagerPage, canActivate: [authGuard] },
  { path: 'users-manager', component: UsersManagerPage, canActivate: [authGuard] },
  { path: 'ingredients-manager', component: IngredientsManagerPage, canActivate: [authGuard] },
  { path: 'about', component: AboutPage },
  { path: 'mention-legales', component: LegalNoticePage },
  { path: '**', redirectTo: 'home' }
];