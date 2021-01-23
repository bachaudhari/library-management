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
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import {AutoCompleteModule} from 'primeng/autocomplete';


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
    SignInComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
