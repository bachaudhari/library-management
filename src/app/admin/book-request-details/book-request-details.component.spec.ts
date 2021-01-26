import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRequestDetailsComponent } from './book-request-details.component';

describe('BookRequestDetailsComponent', () => {
  let component: BookRequestDetailsComponent;
  let fixture: ComponentFixture<BookRequestDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRequestDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRequestDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
