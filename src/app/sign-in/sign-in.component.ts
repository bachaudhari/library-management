import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  error = '';

  constructor(
    private fb: FormBuilder,
    public adminService: AdminService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  signIn() {
    const credentials = this.signInForm.value;
    if (credentials && credentials.userName && credentials.password) {
      this.setDetailsInLocalStorage(credentials);

      if (credentials.userName === 'admin' && credentials.password === '123') {
        this.adminService.showNavIfAdmin.next(true);
        this.adminService.isUserLogged.next(true);
        this.adminService.setLocalStorage('isUserLogged', true)
        this.router.navigate(['/admin/user-list']);
      } else if (credentials.userName === 'user' && credentials.password === '123') {
        this.adminService.showNavIfAdmin.next(false);
        this.adminService.isUserLogged.next(true);
        this.adminService.setLocalStorage('isUserLogged', true)
        this.router.navigate(['/user']);
      } else {
        this.error = 'Please provide valid credentials.';
      }
    } else {
      this.error = 'Please provide credentials.';
    }
  }

  setDetailsInLocalStorage(credentials) {
    this.adminService.setLocalStorage('userName', credentials.userName);
  }
}
