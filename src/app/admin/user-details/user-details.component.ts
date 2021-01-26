import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users;
  user;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.users = this.adminService.getLocalStorage('users');
    const userEmail = this.activatedRoute.snapshot.queryParams.userEmail;
    this.user = this.users.find(x => x.email.toLowerCase() === userEmail.toLowerCase());
  }
}
