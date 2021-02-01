import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[];

  constructor(
    public adminService: AdminService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.adminService.getLocalStorage('books');
  }

  editBook(book) {
    this.router.navigate(['admin/add-book'], {
      queryParams: {
        bookId: book.title
      }
    });
  }
}
