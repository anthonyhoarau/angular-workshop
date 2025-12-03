import { Component, signal } from '@angular/core';
import { Book } from '../google-api';

@Component({
  selector: 'book-overview',
  templateUrl: './book-overview.html',
  styleUrl: './book-overview.scss',
})
export class BookOverview {
  protected book = signal<Book | null>(null);
  protected isFavorite = signal(false);

  protected toggleFavorite() {
    this.isFavorite.update((f) => !f);
  }
}
