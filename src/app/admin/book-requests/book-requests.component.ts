import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-requests',
  templateUrl: './book-requests.component.html',
  styleUrls: ['./book-requests.component.scss']
})
export class BookRequestsComponent implements OnInit {
  loggedUser;
  userBookRequests;
  userRequests;

  constructor(
    public adminService: AdminService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserBookRequests();
  }

  userBookDetails(book) {
    this.router.navigate(['admin/book-request-details'], {
      queryParams: {
        userEmail: this.loggedUser.email,
        bookTitle: book.title
      }
    })
  }

  getUserBookRequests() {
    debugger
    const userBookRequestsFromStorage = this.adminService.getLocalStorage('user-book-requests');
    if (userBookRequestsFromStorage) {
      const users = this.adminService.getLocalStorage('users');

      this.loggedUser = users.find(x => x.email === userBookRequestsFromStorage.userEmail);;
      this.userBookRequests = userBookRequestsFromStorage.books;
    }
  }
}
