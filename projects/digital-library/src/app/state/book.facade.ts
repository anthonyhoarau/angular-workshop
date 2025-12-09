import { inject, Injectable } from '@angular/core';
import { BookActions } from './book.actions';
import { bookFeatureState } from './book.reducer';
import { Store } from '@ngrx/store';
import { selectActiveBook, selectFilteredBooks } from './book.selectors';
import { FavoriteActions } from './favorite.actions';
import { selectBookFavorites, selectIsActiveBookFavorite } from './favorite.selectors';
import { map } from 'rxjs';

@Injectable()
export class BookFacade {
  private store = inject(Store);

  processing$ = this.store.select(bookFeatureState.selectProcessing);
  books$ = this.store.select(selectFilteredBooks);
  activeBook$ = this.store.select(selectActiveBook);

  isActiveBookFavorite$ = this.store.select(selectIsActiveBookFavorite);

  isFavoriteFilter$ = this.store
    .select(bookFeatureState.selectBookFilter)
    .pipe(map((filter) => filter === 'favorite'));

  loadBooks() {
    this.store.dispatch(BookActions.loadBooks());
  }

  selectBook(bookId: string) {
    this.store.dispatch(BookActions.selectBook({ bookId }));
  }

  toggleFavorite(bookId: string) {
    this.store.dispatch(FavoriteActions.toggleFavorite({ bookId }));
  }

  isBookFavorite(bookId: string) {
    return this.store.select(selectBookFavorites(bookId));
  }

  applyFilter(filter: 'all' | 'favorite') {
    this.store.dispatch(BookActions.setFilter({ filter }));
  }
}
