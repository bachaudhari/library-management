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

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'admin',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
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
      }
    ]
  },
  {
    path: 'user',
    component: HomeComponent
  },
  {
    path: 'user-registration',
    component: AddNewUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
