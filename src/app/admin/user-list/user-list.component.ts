import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[];

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.users = this.adminService.getLocalStorage('users');
  }
}
