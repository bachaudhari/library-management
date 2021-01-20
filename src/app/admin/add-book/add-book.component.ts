import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookImageURL;

  constructor(
    private fb: FormBuilder,
    public adminService: AdminService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.addBookForm = this.fb.group({
      title: ['', Validators.required],
      author: [''],
      type: [''],
      image: ['']
    });
  }

  submitBook() {
    debugger

    const addNewBook = this.addBookForm.value;
    const books: any[] = this.adminService.getLocalStorage('books') || [];

    books.push(addNewBook)

    this.adminService.setLocalStorage('books', books);

    setTimeout(() => {
      this.router.navigate(['admin/book-list']);
    }, 300);
  }

  cancel() {

  }

  previewBookImage(file: File) {
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      alert('Only images are supported');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    const that = this;
    reader.onload = (_event) => {
      this.bookImageURL = reader.result;
      that.addBookForm.controls['image'].setValue(this.bookImageURL);
    }
  }
}
