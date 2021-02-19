import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  users;
  user;
  userBooks;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.users = this.adminService.getLocalStorage('users');
    const userEmail = this.activatedRoute.snapshot.queryParams.userEmail;
    this.user = this.users.find(x => x.email.toLowerCase() === userEmail.toLowerCase());
    this.getRequestBookDetails(userEmail);
  }

  goToUseList() {
    this.router.navigate(['admin/user-list'])
  }

  updateUser($event) {
    this.user.isActive = $event.currentTarget.checked;
    this.adminService.setLocalStorage('users', this.users);
  }

  getRequestBookDetails(userEmail) {
    const userBookRequestsFromStorage: any[] = this.adminService.getLocalStorage('user-book-requests');

    if (!userBookRequestsFromStorage) {
      return;
    }

    const request = userBookRequestsFromStorage.find(x => x.userEmail === userEmail);
    this.userBooks = request && request.books.filter(x => x.status === 'approved');
  }
}
