import { createSelector } from '@ngrx/store';
import { favoriteFeatureState } from './favorite.reducer';
import { bookFeatureState } from './book.reducer';

export const selectIsActiveBookFavorite = createSelector(
  favoriteFeatureState.selectFavorites,
  bookFeatureState.selectSelectedBookId,
  (favorites, activeBookId) => {
    if (activeBookId) {
      return favorites.includes(activeBookId);
    }
    return false;
  },
);

export const selectBookFavorites = (bookId: string) =>
  createSelector(favoriteFeatureState.selectFavorites, (favorites) => favorites.includes(bookId));
