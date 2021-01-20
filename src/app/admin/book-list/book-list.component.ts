import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: any[];

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.adminService.getLocalStorage('books');
  }

}
