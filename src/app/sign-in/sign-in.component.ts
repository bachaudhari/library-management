import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../admin/services/admin.service';
import { CommonService } from '../shared/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  error = '';
  users;

  constructor(
    private fb: FormBuilder,
    public adminService: AdminService,
    public commonService: CommonService,
    public router: Router

  ) { }

  ngOnInit(): void {
    this.signInForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signIn() {
    debugger
    console.log(this.signInForm)
    const inputCredentials = this.signInForm.value;
    if (inputCredentials && inputCredentials.email && inputCredentials.password) {
      this.setDetailsInLocalStorage(inputCredentials);
      this.users = this.getUsers();
      this.users = this.users.filter(x => x.isActive);
      const credentials = this.users && this.users.find(x => x.email === inputCredentials.email.toLowerCase())

      if (inputCredentials.email === 'admin@test.com' && inputCredentials.password === 'admin123') {
        this.adminService.isUserLogged.next(true);
        this.adminService.setLocalStorage('isUserLogged', true)
        this.adminService.setLocalStorage('isAdmin', true);
        this.router.navigate(['/admin/user-list']);
      } else if (credentials && inputCredentials.email.toLowerCase() === credentials.email.toLowerCase() && inputCredentials.password === credentials.password) {
        this.adminService.isUserLogged.next(true);
        this.adminService.setLocalStorage('isUserLogged', true);
        this.adminService.setLocalStorage('loggedUserDetails', credentials);
        this.router.navigate(['/user']);
      } else {
        this.error = 'Please provide valid credentials.';
      }
    }
  }

  getUsers() {
    return this.adminService.getLocalStorage('users');
  }

  setDetailsInLocalStorage(credentials) {
    this.adminService.setLocalStorage('email', credentials.email);
  }
}
