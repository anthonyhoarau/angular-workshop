import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from '../google-api';

export const BookActions = createActionGroup({
  source: 'Book UI',
  events: {
    loadBooks: emptyProps(),
  },
});

export const BookApiActions = createActionGroup({
  source: 'Book API',
  events: {
    loadBooksSuccess: props<{ books: Book[] }>(),
  },
});
