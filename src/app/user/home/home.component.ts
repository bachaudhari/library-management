import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books;
  searchBookList;

  constructor(
    public adminService: AdminService
  ) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.adminService.getLocalStorage('books');
  }

  // searchBook(e) {
  //   debugger
  // }

  searchBook(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    // let filtered: any[] = [];
    // let query = event.query;
    // for (let i = 0; i < this.countries.length; i++) {
    //   let country = this.countries[i];
    //   if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
    //     filtered.push(country);
    //   }
    // }

    this.searchBookList = this.books.filter(x => x.title.toLowerCase().includes(event.query.toLowerCase()));
  }

}
