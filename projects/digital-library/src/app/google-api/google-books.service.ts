import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

interface Book {
  id: string;
}

@Injectable({providedIn: 'root'})
export class GoogleBooksService {
  private http = inject(HttpClient);

  getBooks(): Observable<Book[]> {
    return this.http.get<{items: Book[]}>('https://www.googleapis.com/books/v1/volumes?maxResults=10&orderBy=relevance&q=angular').pipe(map((books) => books.items || []));
  }
}
