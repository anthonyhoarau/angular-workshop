import { Component, signal } from '@angular/core';
import { Book } from '../google-api';

@Component({
  selector: 'book-list',
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList {
  protected books = signal<Book[]>([]);

  protected selectBook(book: Book) {}

  protected isFavorite(book: Book): boolean {
    return false;
  }

  protected isActive(): boolean {
    return false;
  }
}
