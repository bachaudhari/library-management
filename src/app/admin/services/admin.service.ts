import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
}
