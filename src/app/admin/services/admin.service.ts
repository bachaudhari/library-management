import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  showNavIfAdmin = new Subject();

  constructor() { }

  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  clearLocalStorageByKey(key) {
    localStorage.removeItem(key);
  }
}
