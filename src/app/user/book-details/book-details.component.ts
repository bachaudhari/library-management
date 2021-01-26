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

  constructor(
    public adminService: AdminService,
    public activatedRoute: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getBookDetails();
  }

  getBookDetails() {
    this.books = this.adminService.getLocalStorage('books');
    const bookTitle = this.activatedRoute.snapshot.queryParams.book;
    this.bookDetails = this.books.find(x => x.title.toLowerCase() === bookTitle.toLowerCase());
  }

  requestForBook() {
    alert('This book is requested, admin will review and give you access for this book');
  }

  onCancel() {
    this.router.navigate(['user']);
  }
}
