import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookFacade } from '@digital-library/state';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'book-menu',
  templateUrl: './book-menu.html',
  styleUrl: './book-menu.scss',
  imports: [FormsModule],
})
export class BookMenu {
  private bookFacade = inject(BookFacade);

  protected search = signal('');
  protected isFavoriteFilter = toSignal(this.bookFacade.isFavoriteFilter$, { requireSync: true });

  protected displayAll() {
    this.bookFacade.applyFilter('all');
  }

  protected displayFavorites() {
    this.bookFacade.applyFilter('favorite');
  }
}
