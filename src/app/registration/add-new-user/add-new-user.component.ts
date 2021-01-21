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
      name: [''],
      age: [''],
      email: [''],
      phone: [''],
      address: ['']
    });
  }

  addUser() {
    const addNewUser = this.addUserForm.value;
    const users: any[] = this.adminService.getLocalStorage('users') || [];

    users.push(addNewUser)

    this.adminService.setLocalStorage('users', users);

    setTimeout(() => {
      this.router.navigate(['admin/user-list']);
    }, 300);
  }

  cancel() {

  }
}
