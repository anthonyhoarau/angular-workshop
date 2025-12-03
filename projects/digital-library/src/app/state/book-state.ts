import { Book } from '../google-api';

export interface BookState {
  processing: boolean;
  selectedBookId: string | null;
  bookFilter: 'all' | 'favorite';
  bookSearchTerm: string;
  books: Book[];
}
