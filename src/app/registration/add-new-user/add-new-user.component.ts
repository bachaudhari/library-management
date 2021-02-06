import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {
  addUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public adminService: AdminService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.addUserForm = this.fb.group({
      name: ['', Validators.required],
      age: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['']
    });
  }

  addUser() {
    const addNewUser = this.addUserForm.value;
    const users: any[] = this.adminService.getLocalStorage('users') || [];

    addNewUser.email = addNewUser.email.toLowerCase();
    addNewUser.password = addNewUser.password.toLowerCase();
    users.push(addNewUser)

    this.adminService.setLocalStorage('users', users);

    setTimeout(() => {
      this.router.navigate(['sign-in']);
    }, 300);
  }

  cancel() {
    this.addUserForm.reset();
    this.router.navigate(['sign-in']);
  }
}
