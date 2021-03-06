import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BookListComponent } from './admin/book-list/book-list.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { HomeComponent } from './user/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { AddNewUserComponent } from './registration/add-new-user/add-new-user.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { BookDetailsComponent } from './user/book-details/book-details.component';
import { BookRequestsComponent } from './admin/book-requests/book-requests.component';
import { BookRequestDetailsComponent } from './admin/book-request-details/book-request-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'user-list',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'book-list',
        component: BookListComponent
      },
      {
        path: 'add-book',
        component: AddBookComponent
      },
      {
        path: 'user-details',
        component: UserDetailsComponent
      },
      {
        path: 'book-requests',
        component: BookRequestsComponent
      },
      {
        path: 'book-request-details',
        component: BookRequestDetailsComponent
      }
    ]
  },
  {
    path: 'user',
    component: HomeComponent
  },
  {
    path: 'book-details',
    component: BookDetailsComponent
  },
  {
    path: 'user-registration',
    component: AddNewUserComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
