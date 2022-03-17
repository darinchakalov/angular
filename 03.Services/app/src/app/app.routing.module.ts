import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './forms/login/login.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';
import { RegisterComponent } from './forms/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/user-list',
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'reactive',
    component: ReactiveFormComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
