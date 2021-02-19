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
  userBookRequests = [];
  userRequests;

  constructor(
    public adminService: AdminService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.getUserBookRequests();
  }

  userBookDetails(user) {
    this.router.navigate(['admin/book-request-details'], {
      queryParams: {
        userEmail: user.userEmail,
      }
    })
  }

  getUserBookRequests() {
    let userBookRequestsFromStorage: any[] = this.adminService.getLocalStorage('user-book-requests');
    if (userBookRequestsFromStorage) {
      const users = this.adminService.getLocalStorage('users');

      userBookRequestsFromStorage.forEach(ele => {
        if (ele.books.find(x => x.status === 'pending')) {
          const user = users.find(x => x.email === ele.userEmail);
          ele.name = user.name;
          this.userBookRequests.push(ele);
        }
      })
    }
  }
}
