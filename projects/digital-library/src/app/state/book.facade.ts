import { inject, Injectable } from '@angular/core';
import { BookActions } from './book.actions';
import { bookFeatureState } from './book.reducer';
import { Store } from '@ngrx/store';

@Injectable()
export class BookFacade {
  private store = inject(Store);

  processing$ = this.store.select(bookFeatureState.selectProcessing);
  books$ = this.store.select(bookFeatureState.selectBooks);

  loadBooks() {
    this.store.dispatch(BookActions.loadBooks());
  }
}
