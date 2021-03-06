import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(
    public adminService: AdminService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.adminService.getLocalStorage('users');
  }

  userDetails(user) {
    this.router.navigate(['admin/user-details'], {
      queryParams: {
        userEmail: user.email
      }
    })
  }
}
