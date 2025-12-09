import { createActionGroup, props } from '@ngrx/store';

export const FavoriteActions = createActionGroup({
  source: 'Favorite UI',
  events: {
    toggleFavorite: props<{ bookId: string }>(),
  },
});
