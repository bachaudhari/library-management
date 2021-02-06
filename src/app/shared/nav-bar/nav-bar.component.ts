import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin/services/admin.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  userType;
  showNav = false;
  showLogout = false;
  isAdmin = false;
  userName = '';

  constructor(
    public router: Router,
    public adminService: AdminService
  ) {
    this.adminService.showNavIfAdmin.subscribe((isShowNav: any) => {
      this.showNav = isShowNav;
    });

    this.adminService.isUserLogged.subscribe((logged: any) => {
      debugger
      this.showLogout = logged;

      setTimeout(() => {
        this.getDetailsFromLocalStorage();
      }, 300);
    });
  }

  ngOnInit(): void {
    this.getDetailsFromLocalStorage();
  }

  redirectToHome() {
    const userName = this.adminService.getLocalStorage('userName');

    if (userName) {
      if (userName.toLowerCase() === 'admin') {
        this.router.navigate(['admin']);
      } else if (userName.toLowerCase() === 'user') {
        this.router.navigate(['user']);
      }
    }
  }

  getDetailsFromLocalStorage() {
    // const user = this.adminService.getLocalStorage('userName');
    // if (user) {
    //   this.userType = user.toLowerCase();

    //   if (this.userType === 'admin') {
    //     this.adminService.showNavIfAdmin.next(true);
    //   }
    // }

    this.isAdmin = this.adminService.getLocalStorage('isAdmin');
    if (this.isAdmin) {
      this.userName = 'Admin';
      this.showNav = true;
    } else {
      const loggedUserDetails = this.adminService.getLocalStorage('loggedUserDetails');
      this.userName = loggedUserDetails && loggedUserDetails.name;
    }

    debugger
    this.showLogout = this.adminService.getLocalStorage('isUserLogged');
  }

  logout() {
    this.adminService.clearLocalStorageByKey('userName');
    this.adminService.clearLocalStorageByKey('loggedUserDetails');
    this.adminService.clearLocalStorageByKey('isAdmin');
    this.adminService.clearLocalStorageByKey('isUserLogged');
    this.adminService.clearLocalStorageByKey('email');
    this.adminService.showNavIfAdmin.next(false);
    this.adminService.isUserLogged.next(false);
    this.showLogout = false;
    this.router.navigate(['']);
  }
}
