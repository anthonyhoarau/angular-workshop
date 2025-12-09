import { FavoriteState } from './favorite-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { FavoriteActions } from './favorite.actions';

const initialFavoriteSate: FavoriteState = {
  favorites: [],
};

const favoriteReducer = createReducer(
  initialFavoriteSate,
  on(FavoriteActions.toggleFavorite, (state, { bookId }) => {
    const index = state.favorites.findIndex((id) => id === bookId);
    if (index > -1) {
      const favorites = [...state.favorites];
      favorites.splice(index, 1);
      return { ...state, favorites };
    } else {
      return { ...state, favorites: [...state.favorites, bookId] };
    }
  }),
);

export const favoriteFeatureState = createFeature({
  name: 'favorites',
  reducer: favoriteReducer,
});
