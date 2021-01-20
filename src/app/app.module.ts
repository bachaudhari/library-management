import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { UserListComponent } from './admin/user-list/user-list.component';
import { BookListComponent } from './admin/book-list/book-list.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { UserDetailsComponent } from './admin/user-details/user-details.component';
import { HomeComponent } from './user/home/home.component';
import { AddNewUserComponent } from './registration/add-new-user/add-new-user.component';
import { LandingComponent } from './landing/landing.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserListComponent,
    BookListComponent,
    AddBookComponent,
    UserDetailsComponent,
    HomeComponent,
    AddNewUserComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
