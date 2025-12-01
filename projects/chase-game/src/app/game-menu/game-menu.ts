import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'game-menu',
  templateUrl: './game-menu.html',
  imports: [
    FormsModule
  ],
  styleUrl: './game-menu.scss'
})
export class GameMenu {
  protected playerName: string | null = null;

  protected startGameDisabled = true;

  private isPlayerFilled = false;

  private router = inject(Router);

  protected startGame() {
    if (this.isPlayerFilled) {
      this.router.navigate(['board']);
    }
  }
}
