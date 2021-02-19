import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service'
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  bookImageURL;
  bookID;

  constructor(
    private fb: FormBuilder,
    public adminService: AdminService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.bookID = this.activatedRoute.snapshot.queryParams.bookId;

    if (this.bookID) {
      this.editBookDetails();
    } else {
      this.setBookForm();
    }
  }

  editBookDetails() {
    const books = this.getBooks();

    const bookDetails = books.find(x => x.title === this.bookID);
    this.setBookForm(bookDetails);
  }

  setBookForm(bookDetails?) {
    this.addBookForm = this.fb.group({
      title: [bookDetails && bookDetails.title ? bookDetails.title : '', Validators.required],
      author: [bookDetails && bookDetails.author ? bookDetails.author : '', Validators.required],
      type: [bookDetails && bookDetails.type ? bookDetails.type : '', Validators.required],
      image: [''],
      bookPDF: []
    });

    if (bookDetails && bookDetails.image) {
      this.bookImageURL = bookDetails.image;
    }
  }

  submitBook() {
    const addNewBook = this.addBookForm.value;
    const books: any[] = this.getBooks();

    books.push(addNewBook)

    this.adminService.setLocalStorage('books', books);

    setTimeout(() => {
      this.router.navigate(['admin/book-list']);
    }, 300);
  }

  cancel() {
    setTimeout(() => {
      this.router.navigate(['admin/book-list']);
    }, 300);
  }

  getBooks() {
    return this.adminService.getLocalStorage('books') || [];
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

  removeBook() {
    const books: any[] = this.getBooks();
    const book = books.findIndex(x => x.title === this.bookID);
    books.splice(book, 1);

    this.adminService.setLocalStorage('books', books);

    this.addBookForm.reset();
    this.bookID = '';
    this.bookImageURL = '';
    setTimeout(() => {
      this.router.navigate(['admin/book-list']);
    }, 300);

  }

  uploadBookPdf(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file.files[0]);

    reader.onload = (_event) => {
      const fileArrayBuffer: any = _event.target.result;
      this.addBookForm.controls.bookPDF.setValue({
        fileName: file.files[0].name,
        fileResult: fileArrayBuffer
      });
    }
  }
}
