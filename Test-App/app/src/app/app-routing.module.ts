import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './product/create/create.component';
import { EditComponent } from './product/edit/edit.component';
import { MainComponent } from './product/main/main.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
