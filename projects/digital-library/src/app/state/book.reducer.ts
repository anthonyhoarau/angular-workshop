import { BookState } from './book-state';
import { createFeature, createReducer, on } from '@ngrx/store';
import { BookActions, BookApiActions } from './book.actions';

const initialBookState: BookState = {
  processing: false,
  selectedBookId: null,
  bookSearchTerm: '',
  bookFilter: 'all',
  books: [],
};

const bookReducer = createReducer(
  initialBookState,
  on(BookActions.loadBooks, (state) => ({ ...state, processing: true })),
  on(BookActions.selectBook, (state, payload) => ({ ...state, selectedBookId: payload.bookId })),
  on(BookActions.setFilter, (state, payload) => ({ ...state, bookFilter: payload.filter })),

  on(BookApiActions.loadBooksSuccess, (state, payload) => {
    return { ...state, processing: false, books: payload.books };
  }),
);

export const bookFeatureState = createFeature({
  name: 'books',
  reducer: bookReducer,
});
