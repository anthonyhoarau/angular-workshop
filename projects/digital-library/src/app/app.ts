import { Component, inject, OnInit } from '@angular/core';
import { BookOverview } from './books/book-overview';
import { BookList } from './books/book-list';
import { BookMenu } from './menu/book-menu';
import { ProgressSpinner } from './shared/progress-spinner';
import { BookFacade } from '@digital-library/state';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [BookOverview, BookList, BookMenu, ProgressSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  private bookFacade = inject(BookFacade);

  protected processing = toSignal(this.bookFacade.processing$);

  ngOnInit() {
    this.bookFacade.loadBooks();
  }
}
