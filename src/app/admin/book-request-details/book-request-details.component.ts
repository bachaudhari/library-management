import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-request-details',
  templateUrl: './book-request-details.component.html',
  styleUrls: ['./book-request-details.component.scss']
})
export class BookRequestDetailsComponent implements OnInit {
  user;
  requestedBooks
  userEmail;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    const users = this.adminService.getLocalStorage('users');
    this.userEmail = this.activatedRoute.snapshot.queryParams.userEmail;
    this.user = users.find(x => x.email.toLowerCase() === this.userEmail.toLowerCase());

    this.getRequestBookDetails(this.userEmail);
  }

  getRequestBookDetails(userEmail) {
    const userBookRequestsFromStorage: any[] = this.adminService.getLocalStorage('user-book-requests');

    const request = userBookRequestsFromStorage.find(x => x.userEmail === userEmail);
    this.requestedBooks = request && request.books;
  }

  approve() {
    const userBookRequestsFromStorage: any[] = this.adminService.getLocalStorage('user-book-requests');
    const request = userBookRequestsFromStorage.find(x => x.userEmail === this.userEmail);
    const requestIndex = userBookRequestsFromStorage.findIndex(x => x.userEmail === this.userEmail);
    userBookRequestsFromStorage.splice(requestIndex, 1);
    request.books.forEach(ele => {
      ele.status = 'approved'
    });
    
    userBookRequestsFromStorage.push(request);
    this.adminService.setLocalStorage('user-book-requests', userBookRequestsFromStorage);


    alert('Approved successfully');

    setTimeout(() => {
      this.router.navigate(['admin/book-requests']);
    }, 500);
  }

  cancel() {
    setTimeout(() => {
      this.router.navigate(['admin/book-requests']);
    }, 300);
  }
}
