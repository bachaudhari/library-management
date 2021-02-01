import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-request-details',
  templateUrl: './book-request-details.component.html',
  styleUrls: ['./book-request-details.component.scss']
})
export class BookRequestDetailsComponent implements OnInit {
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
