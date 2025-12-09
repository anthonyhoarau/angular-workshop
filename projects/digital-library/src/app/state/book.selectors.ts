import { createSelector } from '@ngrx/store';
import { bookFeatureState } from './book.reducer';
import { favoriteFeatureState } from './favorite.reducer';

export const selectActiveBook = createSelector(
  bookFeatureState.selectBooks,
  bookFeatureState.selectSelectedBookId,
  (books, selectedBookId) => {
    return books.find((book) => selectedBookId === book.id) || null;
  },
);

export const selectFilteredBooks = createSelector(
  bookFeatureState.selectBooks,
  bookFeatureState.selectBookFilter,
  favoriteFeatureState.selectFavorites,
  (books, filter, favorites) => {
    if (filter === 'all') {
      return books;
    } else {
      return books.filter((book) => favorites.includes(book.id));
    }
  },
);
