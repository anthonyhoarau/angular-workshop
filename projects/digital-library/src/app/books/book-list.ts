import { Component, inject } from '@angular/core';
import { Book } from '../google-api';
import { BookFacade } from '@digital-library/state';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
  imports: [AsyncPipe],
})
export class BookList {
  private bookFace = inject(BookFacade);

  protected books = toSignal<Book[]>(this.bookFace.books$, { requireSync: true });

  protected selectBook(book: Book) {
    this.bookFace.selectBook(book.id);
  }

  protected isFavorite(book: Book): Observable<boolean> {
    return this.bookFace.isBookFavorite(book.id);
  }

  protected isActive(): boolean {
    return false;
  }
}
