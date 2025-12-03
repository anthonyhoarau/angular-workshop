import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'book-menu',
  templateUrl: './book-menu.html',
  styleUrl: './book-menu.scss',
  imports: [FormsModule],
})
export class BookMenu {
  protected search = signal('');
  protected isFavoriteFilter = signal(false);

  protected displayAll() {}

  protected displayFavorites() {}
}
