import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BookDetailsComponent } from './user/book-details/book-details.component';
import { BookRequestsComponent } from './admin/book-requests/book-requests.component';
import { BookRequestDetailsComponent } from './admin/book-request-details/book-request-details.component';


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
    LandingComponent,
    NavBarComponent,
    SignInComponent,
    BookDetailsComponent,
    BookRequestsComponent,
    BookRequestDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
