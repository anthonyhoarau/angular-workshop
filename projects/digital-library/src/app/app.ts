import { Component, signal } from '@angular/core';
import { BookOverview } from './books/book-overview';
import { BookList } from './books/book-list';
import { BookMenu } from './menu/book-menu';
import { ProgressSpinner } from './shared/progress-spinner';

@Component({
  selector: 'app-root',
  imports: [BookOverview, BookList, BookMenu, ProgressSpinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected processing = signal(false);
}
