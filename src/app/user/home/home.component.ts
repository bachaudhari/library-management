import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books;
  searchBookList;
  userBookRequests;
  loggedUserDetails;

  constructor(
    public adminService: AdminService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loggedUserDetails = this.adminService.getLocalStorage('loggedUserDetails');
    this.getUserBookRequests();
    this.getBooks();
  }

  getUserBookRequests() {
    const userBookRequests: any[] = this.adminService.getLocalStorage('user-book-requests') || [];
    const loggedUserBookRequests = userBookRequests && userBookRequests.find(x => x.userEmail === this.loggedUserDetails.email);

    if (loggedUserBookRequests && loggedUserBookRequests.books) {
      this.userBookRequests = loggedUserBookRequests;
    }
  }

  getBooks() {
    this.books = this.adminService.getLocalStorage('books');
  }

  searchBook(event) {
    this.searchBookList = this.books.filter(x => x.title.toLowerCase().includes(event.query.toLowerCase()) ||
      x.type.toLowerCase().includes(event.query.toLowerCase()));
  }

  onSelect(e) {
    this.router.navigate(['book-details'], {
      queryParams: {
        book: e.title
      }
    });
  }

  downloadPDF(book, bookPdf) {
    if (book && book.status !== 'approved') {
      alert('Book is not approved!');
      return;
    }

    if (!bookPdf) {
      return;
    }

    const downloadLink = document.createElement("a");
    downloadLink.href = bookPdf.fileResult;
    downloadLink.download = bookPdf.fileName;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }
}
