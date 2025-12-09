import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BookActions, BookApiActions } from './book.actions';
import { exhaustMap, map } from 'rxjs';
import { GoogleBooksService } from '../google-api';

@Injectable()
export class BookEffects {
  private action$ = inject(Actions);
  private bookService = inject(GoogleBooksService);

  loadBooks$ = createEffect(() => {
    return this.action$.pipe(
      ofType(BookActions.loadBooks),
      exhaustMap(() =>
        this.bookService
          .getBooks()
          .pipe(map((books) => BookApiActions.loadBooksSuccess({ books }))),
      ),
    );
  });
}
