import { Component, inject } from '@angular/core';
import { BookFacade } from '@digital-library/state';
import { toSignal } from '@angular/core/rxjs-interop';
import { Book } from '../google-api';

@Component({
  selector: 'book-overview',
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.scss',
})
export class BookOverview {
  private bookFacade = inject(BookFacade);

  protected book = toSignal<Book | null>(this.bookFacade.activeBook$, { requireSync: true });
  protected isFavorite = toSignal(this.bookFacade.isActiveBookFavorite$, { requireSync: true });

  protected toggleFavorite() {
    const book = this.book();
    if (book) {
      this.bookFacade.toggleFavorite(book.id);
    }
  }
}
