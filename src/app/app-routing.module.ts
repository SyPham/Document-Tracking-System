import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/Login.component';
import { P404Component } from './views/shared/P404/P404.component';
import { P500Component } from './views/shared/P500/P500.component';
import { LayoutComponent } from './views/shared/layout/layout.component';
import { AuthGuard } from './_core/_guard/auth.guard';
import { UserComponent } from './views/user/user.component';
import { RecordComponent } from './views/record/record.component';
import { HistoryComponent } from './views/history/history.component';
import { DepartmentComponent } from './views/department/department.component';
import { TeamComponent } from './views/team/team.component';
import { CategoryComponent } from './views/category/category.component';
import { SubCategoryComponent } from './views/sub-category/sub-category.component';
import { StatusComponent } from './views/status/status.component';
import { LocationComponent } from './views/location/location.component';
import { ColorCodeComponent } from './views/color-code/color-code.component';


const routes: Routes = [
   // App routes goes here here
   {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'user',
        data: {
          title: 'User'
        },
        component: UserComponent
      },
      {
        path: 'record',
        data: {
          title: 'Record'
        },
        component: RecordComponent
      }
      ,
      {
        path: 'history',
        data: {
          title: 'History'
        },
        component: HistoryComponent
      },
      {
        path: 'department',
        data: {
          title: 'Department'
        },
        component: DepartmentComponent
      },
      {
        path: 'team',
        data: {
          title: 'Team'
        },
        component: TeamComponent
      },
      {
        path: 'category',
        data: {
          title: 'Document Category'
        },
        component: CategoryComponent
      },
      {
        path: 'sub-category',
        data: {
          title: 'Approval Sheet Category'
        },
        component: SubCategoryComponent
      },
      {
        path: 'status',
        data: {
          title: 'Status'
        },
        component: StatusComponent
      },
      {
        path: 'location',
        data: {
          title: 'location'
        },
        component: LocationComponent
      },
      {
        path: 'corlor-code',
        data: {
          title: 'Color Code'
        },
        component: ColorCodeComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Not Found'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Server Error'
    }
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
