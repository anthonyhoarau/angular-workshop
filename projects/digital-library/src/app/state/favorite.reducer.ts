import { FavoriteState } from './favorite-state';
import { createFeature, createReducer } from '@ngrx/store';

const initialFavoriteSate: FavoriteState = {
  favorites: [],
};

const favoriteReducer = createReducer(initialFavoriteSate);

export const favoriteFeatureState = createFeature({
  name: 'favorites',
  reducer: favoriteReducer,
});
