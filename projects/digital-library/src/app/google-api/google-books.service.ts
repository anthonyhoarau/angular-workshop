import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export interface Book {
  id: string;
  volumeInfo: {
    title: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    };
  };
}

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  private http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http
      .get<{
        items: Book[];
      }>('https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=angular')
      .pipe(map((books) => books.items || []));
  }
}
