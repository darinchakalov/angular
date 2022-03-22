import { Routes, RouterModule } from '@angular/router';
import { ParamsActivate } from '../core/guards/params.activate';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: UserListComponent,
  },
  {
    path: 'details/:id',
    component: UserDetailComponent,
    canActivate: [ParamsActivate],
    data: {
      paramsActivate: ['id'],
      paramsActivateRedirectUrl: ['/user/list'],
    },
  },
];

export const UserRoutingModule = RouterModule.forChild(routes);
