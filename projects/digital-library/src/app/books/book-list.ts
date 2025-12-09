import { Component, inject } from '@angular/core';
import { Book } from '../google-api';
import { BookFacade } from '@digital-library/state';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  private bookFace = inject(BookFacade);

  protected books = toSignal<Book[]>(this.bookFace.books$, { requireSync: true });

  protected selectBook(book: Book) {}

  protected isFavorite(book: Book): boolean {
    return false;
  }

  protected isActive(): boolean {
    return false;
  }
}
