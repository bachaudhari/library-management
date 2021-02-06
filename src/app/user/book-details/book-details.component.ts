import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  books: any[];
  bookDetails;
  loggedUserDetails;

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getBookDetails();

    this.loggedUserDetails = this.adminService.getLocalStorage('loggedUserDetails');
  }

  getBookDetails() {
    this.books = this.adminService.getLocalStorage('books');
    const bookTitle = this.activatedRoute.snapshot.queryParams.book;
    this.bookDetails = this.books.find(x => x.title.toLowerCase() === bookTitle.toLowerCase());
  }

  requestForBook() {
    debugger


    // const loggedUserDetails = this.adminService.getLocalStorage('loggedUserDetails');
    const userBookRequestsFromStorage: any[] = this.adminService.getLocalStorage('user-book-requests') || [];
    const userBookRequest = userBookRequestsFromStorage && userBookRequestsFromStorage.find(x => x.email === this.loggedUserDetails.email);

    if (userBookRequest && userBookRequest.books.length > 1) {
      alert('You can request only upto 2 books');
      return false;
    } else if (userBookRequest && userBookRequest.books.length) {
      this.bookDetails.status = 'pending';

      // push book if already has data
      userBookRequest.books.push(this.bookDetails);
      userBookRequestsFromStorage.push(userBookRequest);
      this.adminService.setLocalStorage('user-book-requests', userBookRequestsFromStorage);
    } else {
      this.bookDetails.status = 'pending';
      // new in no data
      const userBookRequest = {
        userEmail: this.loggedUserDetails.email,
        books: [this.bookDetails]
      }
      userBookRequestsFromStorage.push(userBookRequest);
      this.adminService.setLocalStorage('user-book-requests', userBookRequestsFromStorage);
    }

    alert('This book is requested, admin will review and give you access for this book');
    this.router.navigate(['user']);
  }


  onCancel() {
    this.router.navigate(['user']);
  }
}
